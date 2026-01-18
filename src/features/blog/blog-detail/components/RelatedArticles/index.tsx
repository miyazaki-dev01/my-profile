import type { BlogListItem } from "@/features/blog/blog-list/types/blogList";
import { BlogCard } from "@/features/blog/blog-list/components/BlogCard";
import * as styles from "./style.css";

type Props = {
  relatedArticles: BlogListItem[];
};

export function RelatedArticles({ relatedArticles }: Props) {
  if (relatedArticles.length === 0) return null;

  return (
    <>
      <h2 className={styles.title}>関連記事</h2>
      <ul className={styles.articlesList}>
        {relatedArticles.map((blogListItem) => (
          <BlogCard key={blogListItem.id} blogListItem={blogListItem} />
        ))}
      </ul>
    </>
  );
}
