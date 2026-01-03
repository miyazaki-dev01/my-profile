import { microcmsClient } from "@/libs/microcms";
import { MICROCMS_ENDPOINT } from "@/constants/microcms";
import type { BlogListItem } from "@/features/blog/blog-list/types/blogList";

const endpoint = MICROCMS_ENDPOINT.blog;
const DEFAULT_LIMIT = 3;

type RelatedBlogQuery = {
  tags?: string[];
  excludeSlug?: string; // 現在表示中の記事slug
  limit?: number;
};

// タグ配列を正規化（空要素削除・重複排除）
const normalizeTags = (tags?: string[]) => {
  const set = new Set<string>();
  for (const t of tags ?? []) {
    const v = t?.trim();
    if (v) set.add(v);
  }
  return [...set];
};

// フィルタ文字列を構築
const buildFilters = (tags: string[], excludeSlug?: string) => {
  const parts: string[] = [];

  if (tags.length > 0) {
    const orExpr = tags.map((t) => `tags[contains]${t}`).join("[or]");
    parts.push(`(${orExpr})`);
  }
  if (excludeSlug) {
    parts.push(`articleSlug[not_equals]${excludeSlug}`);
  }

  return parts.length ? parts.join("[and]") : undefined;
};

// ブログリストを取得
const fetchBlogList = async (
  filters: string | undefined,
  limit: number
): Promise<BlogListItem[]> => {
  const safeLimit = Math.max(1, limit);

  const res = await microcmsClient.get<{ contents: BlogListItem[] }>({
    endpoint,
    queries: {
      orders: "-publishedAt",
      fields: "id,thumbnail,title,articleSlug,publishedAt",
      limit: safeLimit,
      ...(filters ? { filters } : {}),
    },
  });

  return res.contents ?? [];
};

// スラッグ重複排除で配列を結合（primary優先）
const mergeUniqueBySlug = (
  primary: BlogListItem[],
  secondary: BlogListItem[],
  limit: number
) => {
  const seen = new Set<string>();
  const out: BlogListItem[] = [];

  const pushIfNew = (item: BlogListItem) => {
    if (out.length >= limit) return;
    if (seen.has(item.articleSlug)) return;
    seen.add(item.articleSlug);
    out.push(item);
  };

  for (const item of primary) pushIfNew(item); // 関連を優先
  for (const item of secondary) pushIfNew(item); // 不足分を新着で埋める

  return out;
};

// 関連記事リストを取得
export async function getRelatedBlogList({
  tags,
  excludeSlug,
  limit = DEFAULT_LIMIT,
}: RelatedBlogQuery): Promise<BlogListItem[]> {
  const targetLimit = Math.max(1, limit);
  const normalizedTags = normalizeTags(tags);

  // 1) タグ一致の関連記事（最大 targetLimit）
  const related = normalizedTags.length
    ? await fetchBlogList(
        buildFilters(normalizedTags, excludeSlug),
        targetLimit
      )
    : [];

  const mergedRelated = mergeUniqueBySlug(related, [], targetLimit);
  const missing = targetLimit - mergedRelated.length;

  if (missing <= 0) return mergedRelated;

  // 2) 不足分は「全体の新着」で補充
  const buffer = 6;
  const fallbackLimit = missing + buffer;

  const fallback = await fetchBlogList(
    buildFilters([], excludeSlug),
    fallbackLimit
  );

  // スラッグ重複排除で結合して返却
  return mergeUniqueBySlug(mergedRelated, fallback, targetLimit);
}
