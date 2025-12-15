import React from "react";
import Link from "next/link";
import type { PortfolioListItem } from "@/features/portfolio/portfolio-list/types/portfolioList";
import { PATH } from "@/constants/paths";
import { FallbackImage } from "@/components/elements/FallbackImage";
import * as styles from "./style.css";

type Props = {
  portfolioListItem: PortfolioListItem;
};

export function PortfolioCard({ portfolioListItem }: Props) {
  const { thumbnail, title, description, articleSlug } = portfolioListItem;
  const portfolioLink = `${PATH.portfolio}/${articleSlug}`;

  return (
    <li>
      <Link href={portfolioLink} className={styles.portfolioCard}>
        <div className={styles.thumbnailContainer}>
          <FallbackImage
            tag="img"
            src={thumbnail.url}
            alt={title}
            fallbackSrc="default_thumbnail"
            className={styles.thumbnailContent}
          />
        </div>
        <div className={styles.textContainer}>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>{description}</p>
        </div>
      </Link>
    </li>
  );
}
