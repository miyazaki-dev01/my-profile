import { microcmsClient } from "@/libs/microcms";
import { MICROCMS_ENDPOINT } from "@/constants/microcms";
import type {
  PortfolioListItem,
  PortfolioList,
} from "@/features/portfolio/portfolio-list/types/portfolioList";

const endpoint = MICROCMS_ENDPOINT.portfolio;

export async function getPortfolioListData(): Promise<PortfolioList> {
  const portfolioList = await microcmsClient.getAllContents<PortfolioListItem>({
    endpoint: endpoint,
    queries: {
      fields: "id,thumbnail,title,description,articleSlug",
    },
  });

  return { portfolioList };
}
