import type { NextRequest } from "next/server";
import { cookieNames, isContentType } from "@/config/previewCookies";
import { PATH } from "@/constants/paths";
import { getPortfolioDraftById } from "@/features/portfolio/portfolio-detail/api/getPortfolioDetail";
import { getBlogDraftById } from "@/features/blog/blog-detail/api/getBlogDetail";

export const dynamic = "force-dynamic";

const MAX_AGE_SECONDS = 60 * 30;

const text = (body: string, status: number) =>
  new Response(body, {
    status,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });

type DraftResolvable = { articleSlug: string };
type Resolver<T extends DraftResolvable> = {
  getById(contentId: string, draftKey: string): Promise<T | null>;
  toPath(slug: string): string;
};

const resolvers: Record<string, Resolver<DraftResolvable>> = {
  portfolio: {
    getById: getPortfolioDraftById,
    toPath: (slug) => `${PATH.portfolio}/${slug}`,
  },
  blog: {
    getById: getBlogDraftById,
    toPath: (slug) => `${PATH.blog}/${slug}`,
  },
};

/**
 * microCMS プレビュー開始用の Route Handler（GET）
 * - secret/type/id/draftKey を検証する
 * - type に応じて microCMS の下書き（draftKey付き）を取得し、記事 slug を確定する
 * - Draft Mode を有効化し、下書き取得に必要な cookie（draftKey/contentId）を保存する
 * - 対象の詳細ページ（/portfolio/[slug] 等）へリダイレクトする
 */
export async function GET(req: NextRequest) {
  // 静的ビルド（S3/CloudFront用）では固定レスポンスを返す（=静的化対応）
  if (process.env.STATIC_EXPORT === "true") {
    return text("Draft preview is disabled on static builds.", 404);
  }

  const previewSecret = process.env.MICROCMS_PREVIEW_SECRET;
  if (!previewSecret) {
    return text(
      "Server misconfigured: MICROCMS_PREVIEW_SECRET is missing.",
      500
    );
  }

  // 動的 import
  const { draftMode, cookies } = await import("next/headers");
  const { redirect } = await import("next/navigation");

  // クエリ取得
  const { searchParams } = new URL(req.url);
  const secret = (searchParams.get("secret") ?? "").trim();
  const rawType = (searchParams.get("type") ?? "").trim();
  const contentId = (searchParams.get("id") ?? "").trim();
  const draftKey = (searchParams.get("draftKey") ?? "").trim();

  // バリデーション
  if (secret !== previewSecret) return text("Invalid token", 401);
  if (!isContentType(rawType)) return text("Invalid params", 400);
  if (!contentId || !draftKey) return text("Invalid params", 400);

  // 下書き記事を取得して slug を解決
  let article: DraftResolvable | null = null;
  const resolver = resolvers[rawType];
  try {
    article = await resolver.getById(contentId, draftKey);
  } catch {
    return text("Failed to fetch draft content.", 404);
  }

  const slug = article?.articleSlug;
  if (!slug) return text("Slug not found", 404);

  // Draft Mode を ON
  const d = await draftMode();
  d.enable();

  // Cookie セット
  const cookieStore = await cookies();
  const names = cookieNames(rawType);
  const secure = process.env.NODE_ENV === "production";
  const path = resolver.toPath(slug);

  // draftKey
  cookieStore.set({
    name: names.draftKey,
    value: draftKey,
    httpOnly: true,
    secure,
    sameSite: "lax",
    maxAge: MAX_AGE_SECONDS,
    path,
  });

  // contentId
  cookieStore.set({
    name: names.contentId,
    value: contentId,
    httpOnly: true,
    secure,
    sameSite: "lax",
    maxAge: MAX_AGE_SECONDS,
    path,
  });

  // 対象ページにリダイレクト
  redirect(path);
}
