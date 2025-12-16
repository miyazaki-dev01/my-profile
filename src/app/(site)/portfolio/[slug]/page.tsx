import React from "react";
import { notFound } from "next/navigation";
import {
  getPortfolioSlugs,
  getPortfolioDetail,
  getPortfolioDraftById,
} from "@/features/portfolio/portfolio-detail/api/getPortfolioDetail";
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
