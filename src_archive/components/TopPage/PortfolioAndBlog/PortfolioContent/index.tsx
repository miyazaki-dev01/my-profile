import React from "react";
import Link from "next/link";
import { PortfolioCard } from "../PortfolioCard";
import { titleStyle, portfolioStyle, viewAllStyle } from "./style.css";
import { PortfolioListProps } from "@/types/PortfolioCard";

export const PortfolioContent = ({ portfolios }: PortfolioListProps) => {
  return (
    <div>
      <div className={titleStyle} id="Portfolio">
        Portfolio
      </div>
      <div className={portfolioStyle}>
        {portfolios.map((portfolio) => (
          <PortfolioCard key={portfolio.id} {...portfolio} />
        ))}
      </div>
      <Link
        href="/portfolio"
        className={viewAllStyle}
        target="_blank"
        rel="noopener noreferrer"
      >
        View All
      </Link>
    </div>
  );
};
