import type { ContentDetailBase } from "@/features/content-detail/types/ContentDetailBase";
import { cookieNames, type ContentType } from "@/config/previewCookies";
import type { OgpDataByUrl } from "@/features/content-detail/types/ogp";
import { fetchOgpByUrlFromMdx } from "@/features/content-detail/libs/fetchOgpFromMdx";

type ResolveArgs<T extends ContentDetailBase> = {
  slug: string;
  type: ContentType;
  isStaticExport: boolean;
  getPublicContent(slug: string): Promise<T | null>;
  getDraftContent(id: string, draftKey: string): Promise<T | null>;
};

type ResolveResult<T extends ContentDetailBase> = {
  content: T | null;
  showPreviewBanner: boolean;
  ogpDataByUrl: OgpDataByUrl;
};

export async function resolveContentDetail<T extends ContentDetailBase>({
  slug,
  type,
  isStaticExport,
  getPublicContent,
  getDraftContent,
}: ResolveArgs<T>): Promise<ResolveResult<T>> {
  let content: T | null = null;
  let showPreviewBanner = false;

  if (!isStaticExport) {
    const { draftMode, cookies } = await import("next/headers");

    // Draft Mode を ON
    const d = await draftMode();
    const isEnabled = d.isEnabled;

    // Cookie名の取得
    const names = cookieNames(type);
    const cookieStore = await cookies();

    // プレビューで付与した Cookie を読む（存在しなければ undefined）
    const draftKey = isEnabled
      ? cookieStore.get(names.draftKey)?.value
      : undefined;
    const contentId = isEnabled
      ? cookieStore.get(names.contentId)?.value
      : undefined;

    // Draftモードで draftKey と contentId が揃っていれば下書きを取得
    if (isEnabled && draftKey && contentId) {
      const draft = await getDraftContent(contentId, draftKey);

      // 別記事の Cookie が残っている可能性を考慮し、slug 一致時のみ採用
      if (draft?.articleSlug === slug) {
        content = draft;
        showPreviewBanner = true;
      }
    } else {
      // プレビュー無効/不足時は公開本文にフォールバック
      content = await getPublicContent(slug);
    }
  } else {
    // 静的ビルド：cookies/draftMode には触れず、公開本文を取得
    content = await getPublicContent(slug);
  }

  if (!content) {
    return { content: null, showPreviewBanner: false, ogpDataByUrl: {} };
  }

  // OGP 情報を取得
  const { ogpDataByUrl } = await fetchOgpByUrlFromMdx(content.body);

  return { content, showPreviewBanner, ogpDataByUrl };
}
