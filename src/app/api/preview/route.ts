/**
 * Preview API (GET) — microCMS プレビュー開始エンドポイント
 */

import { NextRequest } from "next/server";
import type { ContentType } from "@/config/preview-cookies";

export const revalidate = 60;

export async function GET(req: NextRequest) {
  // 静的ビルド（S3/CloudFront用）では固定レスポンスを返す（=静的化対応）
  if (process.env.STATIC_EXPORT === "true") {
    return new Response("Draft preview is disabled on static builds.", {
      status: 404,
      headers: { "Content-Type": "text/plain" },
    });
  }

  // 動的 import
  const { draftMode, cookies } = await import("next/headers");
  const { redirect } = await import("next/navigation");
  const { getBlogById, getPortfolioById } = await import("@/libs/microcms");
  const { cookieNames, isContentType } = await import(
    "@/config/preview-cookies"
  );

  // type（blog/portfolio）に応じたリゾルバ
  const resolver = {
    blog: {
      getById: getBlogById,
      toPath: (slug: string) => `/blog/${slug}`,
    },
    portfolio: {
      getById: getPortfolioById,
      toPath: (slug: string) => `/portfolio/${slug}`,
    },
  } as const;

  // クエリからパラメータを取り出しつつ、余計な空白を除去
  const { searchParams } = new URL(req.url);
  const secret = (searchParams.get("secret") ?? "").trim();
  const rawType = (searchParams.get("type") ?? "").trim();
  const contentId = (searchParams.get("id") ?? "").trim();
  const draftKey = (searchParams.get("draftKey") ?? "").trim();

  // バリデーション
  if (secret !== process.env.MICROCMS_PREVIEW_SECRET)
    return new Response("Invalid token", { status: 401 });
  if (!contentId || !isContentType(rawType))
    return new Response("Invalid params", { status: 400 });
  const type: ContentType = rawType;

  // 下書き記事を取得して slug を解決
  const article = await resolver[type].getById(contentId, draftKey);
  const slug = article?.articleSlug;
  if (!slug) return new Response("Slug not found", { status: 404 });

  // Draft Mode を ON
  const d = await draftMode();
  d.enable();

  // Cookie セット
  const cookieStore = await cookies();
  const names = cookieNames(type);
  const path = resolver[type].toPath(slug);

  // draftKey
  if (draftKey) {
    cookieStore.set({
      name: names.draftKey,
      value: draftKey,
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 60 * 30,
      path: path,
    });
  }

  // contentId
  cookieStore.set({
    name: names.contentId,
    value: contentId,
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 60 * 30,
    path: path,
  });

  // 対象ページにリダイレクト（/blog/[slug] or /portfolio/[slug]）
  redirect(path);
}
