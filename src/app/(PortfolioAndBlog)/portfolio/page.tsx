import { getPortfolioListData } from "@/libs/microcms";
import PortfolioListWrapper from "@/components/PortfolioAndBlog/PortfolioListWrapper";

import type { Metadata } from "next";
import { META } from "@/constants/meta";

export const metadata: Metadata = {
  title: META.portfolioTitle,
  description: META.portfolioDescription,
  openGraph: {
    title: META.portfolioTitle,
    description: META.portfolioDescription,
    url: META.portfolioListUrl,
    siteName: META.portfolioTitle,
    images: [{ url: `${META.siteUrl}${META.siteImage}`, alt: "OGP Image" }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: META.portfolioTitle,
    description: META.portfolioDescription,
    images: [`${META.siteUrl}${META.siteImage}`],
  },
};

export default async function AllPortfolioPage() {
  const portfolioListData = await getPortfolioListData();

  return <PortfolioListWrapper portfolios={portfolioListData} />;
}
