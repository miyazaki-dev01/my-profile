import type { Metadata } from "next";
import { META_TEXT } from "@/constants/metaTexts";
import { notFound } from "next/navigation";
import {
  getPortfolioSlugs,
  getPortfolioDetail,
  getPortfolioDraftById,
} from "@/features/portfolio/portfolio-detail/api/getPortfolioDetail";
import { createMetadata } from "@/libs/metadata";
import { resolveContentDetail } from "@/features/content-detail/api/resolveContentDetail";
import { PortfolioDetailPage } from "@/features/portfolio/portfolio-detail";

const isStaticExport = Boolean(process.env.STATIC_EXPORT === "true");

export async function generateStaticParams() {
  const slugs = await getPortfolioSlugs();
  return slugs.map((slug) => ({ slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = await getPortfolioDetail(slug);
  if (!content) {
    return createMetadata({
      title: META_TEXT.pages.portfolio.title,
      description: META_TEXT.fallback.portfolioListDescription,
      path: META_TEXT.pages.portfolio.path,
    });
  }

  return createMetadata({
    title: content.title,
    description: content.description,
    path: `${META_TEXT.pages.portfolio.path}/${content.articleSlug}`,
    image: content.thumbnail.url,
    type: "article",
  });
}

export default async function PortfolioDetailPageRoute({ params }: PageProps) {
  const { slug } = await params;

  const { content, ogpDataByUrl, showPreviewBanner } =
    await resolveContentDetail({
      slug,
      type: "portfolio",
      isStaticExport,
      getPublicContent: getPortfolioDetail,
      getDraftContent: getPortfolioDraftById,
    });

  if (!content) notFound();

  return (
    <PortfolioDetailPage
      content={content}
      showPreviewBanner={showPreviewBanner}
      ogpData={ogpDataByUrl}
    />
  );
}
