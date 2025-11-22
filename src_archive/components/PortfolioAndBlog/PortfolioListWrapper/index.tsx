"use client";

import React from "react";
import { useScrollRestoration } from "@/hooks/useScrollRestoration";
import { PortfolioListProps } from "@/types/PortfolioCard";
import ListPageTitle from "@/components/PortfolioAndBlog/ListPageTitle";
import Image from "next/image";
import Link from "next/link";
import Loader from "@/components/PortfolioAndBlog/Loader";
import { usePageLoading } from "@/hooks/usePageLoading";
import {
  portfoliosStyle,
  portfolioStyle,
  portfolioLinkStyle,
  ImageDivStyle,
  portfolioImageStyle,
  portfolioTextStyle,
  portfolioTitleStyle,
  portfolioDiscriptionStyle,
} from "./style.css";

export default function PortfolioListWrapper({ portfolios }: PortfolioListProps) {
  useScrollRestoration();

  // ページの全リソース（画像・CSSなど含む）が読み込まれたかどうかを判定するカスタムフック
  const loaded = usePageLoading();

  return (
    <>
      {!loaded && <Loader />}

      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.6s ease-in-out",
        }}
      >
        <ListPageTitle title="Portfolio" />
        <div className={portfoliosStyle}>
          {portfolios.map((portfolio) => (
            <div key={portfolio.id} className={portfolioStyle}>
              <Link
                href={`/portfolio/${portfolio.articleSlug}`}
                className={portfolioLinkStyle}
              >
                <div className={ImageDivStyle}>
                  <Image
                    src={portfolio.thumbnail.url}
                    alt="Portfolio Image"
                    width={portfolio.thumbnail.width}
                    height={portfolio.thumbnail.height}
                    unoptimized
                    className={portfolioImageStyle}
                  />
                </div>

                <div className={portfolioTextStyle}>
                  <h2 className={portfolioTitleStyle}>{portfolio.title}</h2>
                  <p className={portfolioDiscriptionStyle}>
                    {portfolio.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
