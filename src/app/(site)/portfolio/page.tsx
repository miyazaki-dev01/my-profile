import React from "react";
import { PortfolioListPage } from "@/features/portfolio/portfolio-list";
import { getPortfolioListData } from "@/features/portfolio/portfolio-list/api/getPortfolioListData";

export default async function PortfolioListPageRoute() {
  const portfolioListData = await getPortfolioListData();

  return <PortfolioListPage portfolioListData={portfolioListData} />;
}
