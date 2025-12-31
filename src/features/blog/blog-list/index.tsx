import React from "react";
import type { BlogList } from "@/features/blog/blog-list/types/blogList";
import { PageTitle } from "@/components/elements/PageTitle";
import { PAGES } from "@/constants/pages";
import { BlogCard } from "@/features/blog/blog-list/components/BlogCard";
import * as styles from "./style.css";

type Props = {
  blogListData: BlogList;
};

export function BlogListPage({ blogListData: { blogList } }: Props) {
  return (
    <div className={styles.root}>
      <PageTitle>{PAGES.blog.title}</PageTitle>

      <ul className={styles.blogList}>
        {blogList.map((blogListItem) => (
          <BlogCard key={blogListItem.id} blogListItem={blogListItem} />
        ))}
      </ul>
    </div>
  );
}
