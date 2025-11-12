import { TopContent } from "@/components/TopPage/TopContent";
import { PortfolioAndBlog } from "@/components/TopPage/PortfolioAndBlog";
import { SkillsAndQualification } from "@/components/TopPage/Skills";
import { Career } from "@/components/TopPage/Career";
import { Working } from "@/components/TopPage/Working";
import {
  getTopContentData,
  getPortfolioListDataForTop,
  getBlogListDataForTop,
} from "@/libs/microcms";
import { Navbar } from "@/components/TopPage/Navbar";
import { Footer } from "@/components/TopPage/Footer";
import SmoothScrollWrapper from "@/components/TopPage/SmoothScrollWrapper";
import type { Metadata } from "next";
import { META } from "@/constants/meta";

export const dynamic = "force-static"; // 静的生成

export const metadata: Metadata = {
  title: META.siteTitle,
  description: META.siteDescription,
  openGraph: {
    title: META.siteTitle,
    description: META.siteDescription,
    url: META.siteUrl,
    siteName: META.siteTitle,
    images: [{ url: `${META.siteUrl}${META.siteImage}`, alt: "OGP Image" }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: META.siteTitle,
    description: META.siteDescription,
    images: [`${META.siteUrl}${META.siteImage}`],
  },
};

export default async function Home() {
  const topData = await getTopContentData();
  const portfolioCardData = await getPortfolioListDataForTop();
  const BlogCardData = await getBlogListDataForTop();

  return (
    <>
      <Navbar />
      <SmoothScrollWrapper>
        <main className="mt-[50px]">
          <TopContent topData={topData} />
          <PortfolioAndBlog
            portfolios={portfolioCardData}
            blogs={BlogCardData}
          />
          <SkillsAndQualification />
          <Career />
          <Working />
        </main>
      </SmoothScrollWrapper>
      <Footer />
    </>
  );
}
