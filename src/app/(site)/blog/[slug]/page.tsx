import type { Metadata } from "next";
import { META_TEXT } from "@/constants/metaTexts";
import { notFound } from "next/navigation";
import {
  getBlogSlugs,
  getBlogDetail,
  getBlogDraftById,
} from "@/features/blog/blog-detail/api/getBlogDetail";
import { createMetadata } from "@/libs/metadata";
import { getRelatedBlogList } from "@/features/blog/blog-detail/api/getRelatedBlogList";
import { resolveContentDetail } from "@/features/content-detail/api/resolveContentDetail";
import { BlogDetailPage } from "@/features/blog/blog-detail";

const isStaticExport = Boolean(process.env.STATIC_EXPORT === "true");

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = await getBlogDetail(slug);
  if (!content) {
    return createMetadata({
      title: META_TEXT.pages.blog.title,
      description: META_TEXT.fallback.blogListDescription,
      path: META_TEXT.pages.blog.path,
    });
  }

  return createMetadata({
    title: content.title,
    description: content.description,
    path: `${META_TEXT.pages.blog.path}/${content.articleSlug}`,
    image: content.thumbnail.url,
    type: "article",
    publishedTime: content.publishedAt,
    modifiedTime: content.revisedAt,
  });
}

export default async function BlogDetailPageRoute({ params }: PageProps) {
  const { slug } = await params;

  const { content, ogpDataByUrl, showPreviewBanner } =
    await resolveContentDetail({
      slug,
      type: "blog",
      isStaticExport,
      getPublicContent: getBlogDetail,
      getDraftContent: getBlogDraftById,
    });

  if (!content) notFound();

  const relatedArticles = await getRelatedBlogList({
    tags: content.tags ?? [],
    excludeSlug: content.articleSlug,
  });

  return (
    <BlogDetailPage
      content={content}
      showPreviewBanner={showPreviewBanner}
      ogpData={ogpDataByUrl}
      relatedArticles={relatedArticles}
    />
  );
}
