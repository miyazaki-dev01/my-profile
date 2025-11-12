import React from "react";
import { getAllBlogSlugs, getBlogBySlug, getBlogById } from "@/libs/microcms";
import type { Metadata } from "next";
import { generateMetadataByContent } from "@/components/PortfolioAndBlog/ContentPage/MetaData";
import { PATH } from "@/constants/paths";
import { META } from "@/constants/meta";
import { notFound } from "next/navigation";
import { fetchOgpDataFromMdx } from "@/libs/fetchOgpDataFromMdx";
import { MdxComponents } from "@/components/PortfolioAndBlog/ContentPage/MdxComponents";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { mdxOptions } from "@/libs/mdxOptions";
import BlogClientWrapper from "@/components/PortfolioAndBlog/ContentPage/BlogClientWrapper";
import { cookieNames } from "@/config/preview-cookies";
import PreviewBanner from "@/components/PortfolioAndBlog/PreviewBanner";

export const revalidate = 60;

// 静的ビルド（export）の判定フラグ
const isStaticBuild = Boolean(process.env.STATIC_EXPORT === "true");

type PageProps = {
  params: Promise<{ slug: string }>;
};

// SG用(全ポートフォリオ記事slug取得)
export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return (slugs ?? []).map(({ articleSlug }) => ({ slug: articleSlug }));
}

// Meta情報生成（静的ビルドでも Cookie 等に依存せず、公開データのみで生成する）
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return generateMetadataByContent({
    slug,
    getContentBySlug: getBlogBySlug,
    pathPrefix: PATH.blog,
    siteName: META.siteTitle,
  });
}

/**
 * ページ本体
 * - 開発時：Draft Mode を考慮して“下書き本文”を優先して取得
 * - 静的ビルド時：公開データのみを取得
 */
export default async function BlogContentPage({ params }: PageProps) {
  const { slug } = await params;

  // 表示データ本体 & プレビューバナー表示可否
  let blogContentData:
    | Awaited<ReturnType<typeof getBlogBySlug>>
    | Awaited<ReturnType<typeof getBlogById>>
    | null = null;
  let showBanner = false;

  if (!isStaticBuild) {
    // 動的 import
    const { draftMode, cookies } = await import("next/headers");

    // Draft Mode を ON
    const d = await draftMode();
    const isEnabled = d.isEnabled;

    // Cookie名の取得
    const names = cookieNames("blog");
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
      const draft = await getBlogById(contentId, draftKey);
      // 別記事の Cookie が残っている可能性を考慮し、slug 一致時のみ採用
      if (draft?.articleSlug === slug) {
        blogContentData = draft;
        showBanner = true;
      }
    } else {
      // プレビュー無効/不足時は公開本文にフォールバック
      blogContentData = await getBlogBySlug(slug);
    }
  } else {
    // 静的ビルド：cookies/draftMode には触れず、公開本文を取得
    blogContentData = await getBlogBySlug(slug);
  }

  // データが無ければ 404
  if (!blogContentData) return notFound();

  // OGP 情報を取得しつつ、Markdown → MDX に変換
  const { ogpDataList } = await fetchOgpDataFromMdx(blogContentData.body);
  const components = MdxComponents(blogContentData.images, ogpDataList);

  return (
    <>
      {/* プレビュー時のみ上部にバナーを表示 */}
      {showBanner && <PreviewBanner type="blog" />}

      <BlogClientWrapper blogContent={blogContentData}>
        <MDXRemote
          source={blogContentData.body}
          options={mdxOptions}
          components={components}
        />
      </BlogClientWrapper>
    </>
  );
}
