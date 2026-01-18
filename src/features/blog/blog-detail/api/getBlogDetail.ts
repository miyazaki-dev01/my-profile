import { microcmsClient } from "@/libs/microcms";
import { MICROCMS_ENDPOINT } from "@/constants/microcms";
import type {
  BlogDetail,
  BlogListSlug,
} from "@/features/blog/blog-detail/types/blogDetail";

const endpoint = MICROCMS_ENDPOINT.blog;

// ブログの全スラッグを取得する
export async function getBlogSlugs(): Promise<string[]> {
  const slugs = await microcmsClient.getAllContents<BlogListSlug>({
    endpoint: endpoint,
    queries: { fields: "articleSlug" },
  });
  return slugs.map(({ articleSlug }) => articleSlug);
}

// 指定されたスラッグのブログ詳細を取得する
export async function getBlogDetail(slug: string): Promise<BlogDetail | null> {
  try {
    const res = await microcmsClient.get<{ contents: BlogDetail[] }>({
      endpoint: endpoint,
      queries: {
        filters: `articleSlug[equals]${slug}`,
        limit: 1,
      },
    });
    return res.contents[0] ?? null;
  } catch {
    return null;
  }
}

// contentId, draftKey を使用し、下書き記事を取得（プレビュー用）
export async function getBlogDraftById(
  contentId: string,
  draftKey: string
): Promise<BlogDetail | null> {
  try {
    const res = await microcmsClient.getListDetail<BlogDetail>({
      endpoint: endpoint,
      contentId,
      queries: { draftKey },
      customRequestInit: { cache: "no-store" },
    });
    return res;
  } catch {
    return null;
  }
}
