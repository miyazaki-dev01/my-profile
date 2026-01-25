import type { MetadataRoute } from "next";
import { URL as URLS } from "@/constants/urls";
import { PATH } from "@/constants/paths";
import { microcmsClient } from "@/libs/microcms";
import { MICROCMS_ENDPOINT } from "@/constants/microcms";

export const dynamic = "force-static";
export const revalidate = false;

type PortfolioSitemapItem = {
  articleSlug: string;
  revisedAt?: string;
  updatedAt?: string;
  publishedAt?: string;
};

type BlogSitemapItem = {
  articleSlug: string;
  revisedAt?: string;
  updatedAt?: string;
  publishedAt?: string;
};

const absUrl = (base: URL, path: string) => new URL(path, base).toString();

const pickLastModified = (...candidates: Array<string | undefined>) =>
  candidates.find(Boolean);

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = new URL(URLS.appRoot);

  const staticPaths = [
    PATH.profile,
    PATH.portfolio,
    PATH.blog,
    PATH.skill,
    PATH.career,
    PATH.contact,
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: absUrl(base, path),
    priority: path === PATH.profile ? 1 : 0.7,
  }));

  const [portfolioItems, blogItems] = await Promise.all([
    microcmsClient.getAllContents<PortfolioSitemapItem>({
      endpoint: MICROCMS_ENDPOINT.portfolio,
      queries: { fields: "articleSlug,revisedAt,updatedAt,publishedAt" },
    }),
    microcmsClient.getAllContents<BlogSitemapItem>({
      endpoint: MICROCMS_ENDPOINT.blog,
      queries: { fields: "articleSlug,revisedAt,updatedAt,publishedAt" },
    }),
  ]);

  const portfolioEntries: MetadataRoute.Sitemap = portfolioItems
    .filter((item: PortfolioSitemapItem) => Boolean(item.articleSlug))
    .map((item: PortfolioSitemapItem) => ({
      url: absUrl(base, `${PATH.portfolio}/${item.articleSlug}`),
      lastModified: pickLastModified(
        item.revisedAt,
        item.updatedAt,
        item.publishedAt,
      ),
      priority: 0.6,
    }));

  const blogEntries: MetadataRoute.Sitemap = blogItems
    .filter((item: BlogSitemapItem) => Boolean(item.articleSlug))
    .map((item: BlogSitemapItem) => ({
      url: absUrl(base, `${PATH.blog}/${item.articleSlug}`),
      lastModified: pickLastModified(
        item.revisedAt,
        item.updatedAt,
        item.publishedAt,
      ),
      priority: 0.6,
    }));

  const merged = [...staticEntries, ...portfolioEntries, ...blogEntries];
  const seen = new Set<string>();
  return merged.filter((e) =>
    seen.has(e.url) ? false : (seen.add(e.url), true),
  );
}
