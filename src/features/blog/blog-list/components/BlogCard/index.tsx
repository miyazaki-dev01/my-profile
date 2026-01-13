import React from "react";
import { InternalLink } from "@/components/elements/Link/InternalLink";
import type { BlogListItem } from "@/features/blog/blog-list/types/blogList";
import { PATH } from "@/constants/paths";
import { FallbackImage } from "@/components/elements/FallbackImage";
import { formatDate } from "@/libs/date";
import * as styles from "./style.css";

type Props = {
  blogListItem: BlogListItem;
};

export function BlogCard({ blogListItem }: Props) {
  const { thumbnail, title, articleSlug, publishedAt } = blogListItem;

  const blogLink = `${PATH.blog}/${articleSlug}`;

  return (
    <li>
      <InternalLink href={blogLink} scroll={false}>
        <div className={styles.blogCardStyle}>
          <div className={styles.textContainerStyle}>
            <p className={styles.titleStyle}>{title}</p>
            <p className={styles.publishedAtStyle}>{formatDate(publishedAt)}</p>
          </div>
          <div className={styles.imageContainerStyle}>
            <FallbackImage
              tag="img"
              src={thumbnail.url}
              alt={title}
              className={styles.imageStyle}
            />
          </div>
        </div>
      </InternalLink>
    </li>
  );
}
