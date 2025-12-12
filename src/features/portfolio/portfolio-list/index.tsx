import React from "react";
import type { PortfolioList } from "@/features/portfolio/portfolio-list/types/portfolioListData";
import { PageTitle } from "@/components/elements/PageTitle";
import { PAGES } from "@/constants/pages";
import { PortfolioCard } from "@/features/portfolio/portfolio-list/components/PortfolioCard";
import * as styles from "./style.css";

type PortfolioListPageProps = {
  portfolioListData: PortfolioList;
};

export function PortfolioListPage({
  portfolioListData: { portfolioList },
}: PortfolioListPageProps) {
  return (
    <div className={styles.root}>
      <PageTitle>{PAGES.portfolio.title}</PageTitle>

      <div className={styles.gridWrapper}>
        <ul className={styles.gridContent}>
          {portfolioList.map((portfolioListItem) => (
            <PortfolioCard
              key={portfolioListItem.id}
              portfolioListItem={portfolioListItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
