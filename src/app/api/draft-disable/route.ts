/**
 * Draft Disable API (GET) — プレビュー終了エンドポイント
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
  const { cookieNames, isContentType } = await import(
    "@/config/preview-cookies"
  );

  // 一覧ページへの戻り先（リダイレクト先）を type ごとに定義
  const listPath: Record<ContentType, string> = {
    blog: "/blog",
    portfolio: "/portfolio",
  };

  // クエリから type を取得
  const { searchParams } = new URL(req.url);
  const rawType = (searchParams.get("type") ?? "").trim();

  // Draft Mode を OFF
  const d = await draftMode();
  d.disable();

  // Cookie の削除
  const cookieStore = await cookies();

  if (isContentType(rawType)) {
    // 指定タイプだけ削除（/blog or /portfolio の一覧に戻す）
    const names = cookieNames(rawType);
    cookieStore.delete(names.draftKey);
    cookieStore.delete(names.contentId);
    redirect(listPath[rawType]);
  } else {
    // type が不正なら全タイプ分まとめて削除し、トップへ戻す
    (Object.keys(listPath) as (keyof typeof listPath)[]).forEach((t) => {
      const names = cookieNames(t);
      cookieStore.delete(names.draftKey);
      cookieStore.delete(names.contentId);
    });
    redirect("/");
  }
}
