"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PortfolioDetailProps } from "@/types/PortfolioContent";
import { useScrollRestoration } from "@/hooks/useScrollRestoration";
import { usePageLoading } from "@/hooks/usePageLoading";
import Loader from "@/components/PortfolioAndBlog/Loader";
import * as styles from "./style.css";
import { SnsShareIcons } from "@/components/PortfolioAndBlog/ContentPage/SnsShareIcon";
import { URL } from "@/constants/url";
import { PATH } from "@/constants/paths";
import { FiExternalLink } from "react-icons/fi";

type Props = {
  portfolioContent: PortfolioDetailProps;
  children: React.ReactNode;
};

export default function PortfolioClientWrapper({
  portfolioContent,
  children,
}: Props) {
  useScrollRestoration();

  // ページの全リソースが読み込まれたかどうかを判定するカスタムフック
  const loaded = usePageLoading();

  const url = `${URL.appRoot}${PATH.portfolio}/${portfolioContent.articleSlug}`;

  return (
    <>
      {!loaded && <Loader />}

      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.6s ease-in-out",
        }}
      >
        <div className={styles.contentDivStyle}>
          <h1 className={styles.TitleStyle}>{portfolioContent.title}</h1>
          <hr className={styles.TitleHrStyle} />
          <div className={styles.ContentMarginStyle}>
            <div className={styles.DiscriptionStyle}>
              {portfolioContent.description}
            </div>
            <div className={styles.ImageLinkDivStyle}>
              <Link
                href={portfolioContent.serviceURL}
                className={styles.ImageLinkStyle}
                target="_blank"
              >
                <div className={styles.ImageDivStyle}>
                  <Image
                    src={portfolioContent.thumbnail.url}
                    alt="Portfolio Thumbnail"
                    width={portfolioContent.thumbnail.width}
                    height={portfolioContent.thumbnail.height}
                    unoptimized
                    className={styles.ImageStyle}
                  />
                  <div className={styles.HoverTextStyle}>
                    <p>Launch Website</p>
                    <FiExternalLink className={styles.iconStyle} />
                  </div>
                </div>
                <div className={styles.SiteUrlDivStyle}>
                  <p>{portfolioContent.serviceURL}</p>
                  <FiExternalLink />
                </div>
              </Link>
            </div>

            {children}

            <SnsShareIcons url={url} title={portfolioContent.title} />
          </div>
        </div>
      </div>
    </>
  );
}
