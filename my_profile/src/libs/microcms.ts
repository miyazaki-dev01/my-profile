import { createClient } from "microcms-js-sdk";
import { TopContentProps } from "../types/topContent";
import { PortfolioCardProps } from "@/types/PortfolioCard";
import { PortfolioDetailProps } from "@/types/PortfolioContent";
import { BlogCardProps } from "@/types/BlogCard";
import { BlogDetailProps } from "@/types/BlogContent";

// 環境変数にMICROCMS_SERVICE_DOMAINが設定されていない場合はエラーを投げる
if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

// 環境変数にMICROCMS_API_KEYが設定されていない場合はエラーを投げる
if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

// Client SDKの初期化を行う
export const client = createClient({
  apiKey: process.env.MICROCMS_API_KEY!,
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
});

// --------------------------------------------------
// トップページ
// --------------------------------------------------

// トップコンテンツ
export const getTopContentData = async (): Promise<TopContentProps> => {
  const data = await client.get({ endpoint: "top-content" });
  return data;
};

// ポートフォリオ
export const getPortfolioListDataForTop = async (): Promise<
  PortfolioCardProps[]
> => {
  const data = await client.get({
    endpoint: "portfolio",
    queries: { fields: "id,title,description,thumbnail,articleSlug", limit: 2 },
  });
  return data.contents;
};

// ブログ
export const getBlogListDataForTop = async (): Promise<BlogCardProps[]> => {
  const data = await client.get({
    endpoint: "blog",
    queries: {
      fields: "id,title,category,thumbnail,articleSlug,revisedAt",
      limit: 5,
    },
  });
  return data.contents;
};

// --------------------------------------------------
// 一覧ページ
// --------------------------------------------------

// ポートフォリオ一覧
export const getPortfolioListData = async (): Promise<PortfolioCardProps[]> => {
  const data = await client.getAllContents({
    endpoint: "portfolio",
    queries: { fields: "id,title,description,thumbnail,articleSlug" },
  });
  return data;
};

// ブログ一覧
export const getBlogListData = async (): Promise<BlogCardProps[]> => {
  const data = await client.getAllContents({
    endpoint: "blog",
    queries: {
      fields: "id,title,category,thumbnail,articleSlug,revisedAt",
    },
  });
  return data;
};

// --------------------------------------------------
// ポートフォリオ詳細
// --------------------------------------------------

// カスタムURLを全件取得
export const getAllPortfolioSlugs = async (): Promise<
  { articleSlug: string }[] | []
> => {
  const data = await client.getAllContents({
    endpoint: "portfolio",
    queries: {
      fields: "articleSlug",
    },
  });

  return data ?? [];
};

// slugに対応する詳細を取得
export const getPortfolioBySlug = async (
  slug: string
): Promise<PortfolioDetailProps | null> => {
  const data = await client.get({
    endpoint: "portfolio",
    queries: {
      filters: `articleSlug[equals]${slug}`,
      limit: 1,
    },
  });

  return data.contents[0] ?? null;
};

// contentId, draftKey を使用し、下書き記事を取得（プレビュー用）
export async function getPortfolioById(
  contentId: string,
  draftKey: string
): Promise<PortfolioDetailProps | null> {
  const data = await client.getListDetail<PortfolioDetailProps>({
    endpoint: "portfolio",
    contentId,
    queries: {
      draftKey: draftKey || undefined,
    },
    customRequestInit: {
      cache: "no-store" as const,
    },
  });

  return data ?? null;
}

// --------------------------------------------------
// ブログ詳細
// --------------------------------------------------

// カスタムURLを全件取得
export const getAllBlogSlugs = async (): Promise<{ articleSlug: string }[]> => {
  const data = await client.getAllContents({
    endpoint: "blog",
    queries: {
      fields: "articleSlug",
    },
  });
  return data ?? [];
};

// slugに対応する詳細を取得
export const getBlogBySlug = async (
  slug: string
): Promise<BlogDetailProps | null> => {
  const data = await client.get({
    endpoint: "blog",
    queries: {
      filters: `articleSlug[equals]${slug}`,
      limit: 1,
    },
  });
  return data.contents[0] ?? null;
};

// contentId, draftKey を使用し、下書き記事を取得（プレビュー用）
export async function getBlogById(
  contentId: string,
  draftKey: string
): Promise<BlogDetailProps | null> {
  const data = await client.get({
    endpoint: "blog",
    contentId,
    queries: {
      draftKey: draftKey || undefined,
    },
    customRequestInit: {
      cache: "no-store" as const,
    },
  });

  return data;
}
