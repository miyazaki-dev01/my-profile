import type { MetadataRoute } from "next";
import { URL as URLS } from "@/constants/urls";

export const dynamic = "force-static";
export const revalidate = false;

export default function robots(): MetadataRoute.Robots {
  const base = new URL(URLS.appRoot);
  const sitemapUrl = new URL("/sitemap.xml", base).toString();

  const isProduction = process.env.NODE_ENV === "production";

  if (!isProduction) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
      sitemap: sitemapUrl,
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: ["/api/"],
      },
    ],
    sitemap: sitemapUrl,
  };
}
