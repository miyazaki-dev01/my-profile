import type { NextRequest } from "next/server";
import {
  isContentType,
  cookieNames,
  type ContentType,
} from "@/config/previewCookies";
import { PATH } from "@/constants/paths";

export const dynamic = "force-dynamic";

const text = (body: string, status: number) =>
  new Response(body, {
    status,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });

const LIST_PATH: Record<ContentType, string> = {
  portfolio: PATH.portfolio,
  blog: PATH.blog,
};

/**
 * Draft Disable API (GET) — プレビュー終了エンドポイント
 * - Draft Mode を無効化（draftMode().disable()）
 * - 指定された type（portfolio/blog）が正しければ、その type のプレビュー用 cookie を削除して一覧へリダイレクト
 * - type が不正/未指定なら、全 type のプレビュー用 cookie を削除してプロフィールへリダイレクト
 */
export async function GET(req: NextRequest) {
  // 静的ビルド（S3/CloudFront用）では固定レスポンスを返す（=静的化対応）
  if (process.env.STATIC_EXPORT === "true") {
    return text("Draft preview is disabled on static builds.", 404);
  }

  // 動的 import
  const { draftMode, cookies } = await import("next/headers");
  const { redirect } = await import("next/navigation");

  // クエリから type を取得
  const { searchParams } = new URL(req.url);
  const rawType = (searchParams.get("type") ?? "").trim();

  // Draft Mode を OFF
  const d = await draftMode();
  d.disable();

  const cookieStore = await cookies();

  if (isContentType(rawType)) {
    const names = cookieNames(rawType);
    cookieStore.delete(names.draftKey);
    cookieStore.delete(names.contentId);
    redirect(LIST_PATH[rawType]);
  }

  (Object.keys(LIST_PATH) as ContentType[]).forEach((type) => {
    const names = cookieNames(type);
    cookieStore.delete(names.draftKey);
    cookieStore.delete(names.contentId);
  });

  redirect(PATH.profile);
}
