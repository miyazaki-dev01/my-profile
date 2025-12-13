import { microcmsClient } from "@/libs/microcms";
import type {
  PortfolioListItem,
  PortfolioList,
} from "@/features/portfolio/portfolio-list/types/portfolioList";

export async function getPortfolioListData(): Promise<PortfolioList> {
  const portfolioList = await microcmsClient.getAllContents<PortfolioListItem>({
    endpoint: "portfolio",
    queries: {
      fields: "id,thumbnail,title,description,articleSlug",
    },
  });

  return { portfolioList };
}
