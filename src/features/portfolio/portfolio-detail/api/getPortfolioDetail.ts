import { microcmsClient } from "@/libs/microcms";
import { MICROCMS_ENDPOINT } from "@/constants/microcms";
import type {
  PortfolioDetail,
  PortfolioListSlug,
} from "@/features/portfolio/portfolio-detail/types/portfolioDetail";

const endpoint = MICROCMS_ENDPOINT.portfolio;

export async function getPortfolioSlugs(): Promise<string[]> {
  const slugs = await microcmsClient.getAllContents<PortfolioListSlug>({
    endpoint: endpoint,
    queries: { fields: "articleSlug" },
  });
  return slugs.map(({ articleSlug }) => articleSlug);
}

export async function getPortfolioDetail(
  slug: string
): Promise<PortfolioDetail | null> {
  try {
    const res = await microcmsClient.get<{ contents: PortfolioDetail[] }>({
      endpoint: endpoint,
      queries: {
        filters: `articleSlug[equals]${slug}`,
        limit: 1,
      },
    });
    return res.contents[0] ?? null;
  } catch {
    return null;
  }
}

export async function getPortfolioDraftById(
  contentId: string,
  draftKey: string
): Promise<PortfolioDetail | null> {
  try {
    const res = await microcmsClient.getListDetail<PortfolioDetail>({
      endpoint: endpoint,
      contentId,
      queries: { draftKey },
      customRequestInit: { cache: "no-store" },
    });
    return res;
  } catch {
    return null;
  }
}
