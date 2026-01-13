import { PortfolioListPage } from "@/features/portfolio/portfolio-list";
import { getPortfolioListData } from "@/features/portfolio/portfolio-list/api/getPortfolioList";

export default async function PortfolioListPageRoute() {
  const portfolioListData = await getPortfolioListData();

  return <PortfolioListPage portfolioListData={portfolioListData} />;
}
