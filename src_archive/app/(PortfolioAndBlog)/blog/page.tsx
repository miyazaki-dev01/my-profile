import { getBlogListData } from "@/libs/microcms";
import BlogListWrapper from "@/components/PortfolioAndBlog/BlogListWrapper";
import type { Metadata } from "next";
import { META } from "@/constants/meta";

export const metadata: Metadata = {
  title: META.blogTitle,
  description: META.blogDescription,
  openGraph: {
    title: META.blogTitle,
    description: META.blogDescription,
    url: META.blogListUrl,
    siteName: META.blogTitle,
    images: [{ url: `${META.siteUrl}${META.siteImage}`, alt: "OGP Image" }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: META.blogTitle,
    description: META.blogDescription,
    images: [`${META.siteUrl}${META.siteImage}`],
  },
};

export default async function AllPortfolioPage() {
  const blogListData = await getBlogListData();

  return <BlogListWrapper blogs={blogListData} />;
}
