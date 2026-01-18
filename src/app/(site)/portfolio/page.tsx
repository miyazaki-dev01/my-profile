import { META_TEXT } from "@/constants/metaTexts";
import { createMetadata } from "@/libs/metadata";
import { PortfolioListPage } from "@/features/portfolio/portfolio-list";
import { getPortfolioListData } from "@/features/portfolio/portfolio-list/api/getPortfolioList";

export const metadata = createMetadata(META_TEXT.pages.portfolio);

export default async function PortfolioListPageRoute() {
  const portfolioListData = await getPortfolioListData();

  return <PortfolioListPage portfolioListData={portfolioListData} />;
}
