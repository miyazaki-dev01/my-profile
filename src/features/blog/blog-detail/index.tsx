import type { BlogDetail } from "@/features/blog/blog-detail/types/blogDetail";
import type { BlogListItem } from "@/features/blog/blog-list/types/blogList";
import type { OgpDataByUrl } from "@/features/content-detail/types/ogp";
import { PATH } from "@/constants/paths";
import { URL } from "@/constants/urls";
import { PreviewBanner } from "@/features/content-detail/components/PreviewBanner";
import { ContentDetailBody } from "@/features/content-detail/components/ContentDetailBody";
import { SnsShareIcons } from "@/features/blog/blog-detail/components/SnsShareIcons";
import { TableOfContents } from "@/features/blog/blog-detail/components/TableOfContents";
import { RelatedArticles } from "@/features/blog/blog-detail/components/RelatedArticles";
import { ArticleJsonLd } from "@/components/seo/ArticleJsonLd";
import { ScrollToTopButton } from "@/features/content-detail/components/ScrollToTopButton";
import { TbClock } from "react-icons/tb";
import { TbRefresh } from "react-icons/tb";
import { formatDate } from "@/libs/date";
import * as styles from "./style.css";

type Props = {
  content: BlogDetail;
  showPreviewBanner: boolean;
  ogpData: OgpDataByUrl;
  relatedArticles: BlogListItem[];
};

export function BlogDetailPage({
  content,
  showPreviewBanner,
  ogpData,
  relatedArticles,
}: Props) {
  const { title, tags, body, images, articleSlug, publishedAt, revisedAt } =
    content;

  const articleUrl = `${URL.appRoot}${PATH.blog}/${articleSlug}`;

  return (
    <div className={styles.root}>
      {showPreviewBanner && <PreviewBanner type="blog" />}

      <div className={styles.body}>
        <div>
          <h1 className={styles.title}>{title}</h1>

          {tags && tags.length > 0 && (
            <ul className={styles.tagsList}>
              {tags.map((tag) => (
                <li key={tag} className={styles.tagsItem}>
                  {tag}
                </li>
              ))}
            </ul>
          )}

          <div className={styles.metaRow}>
            <div className={styles.dateContainer}>
              <div className={styles.dateItem}>
                <TbClock className={styles.dateIcon} />
                <p className={styles.date}>{formatDate(publishedAt)}</p>
              </div>
              <div className={styles.dateItem}>
                <TbRefresh className={styles.dateIcon} />
                <p className={styles.date}>{formatDate(revisedAt)}</p>
              </div>
            </div>

            <SnsShareIcons url={articleUrl} title={title} />
          </div>
        </div>

        <TableOfContents targetId="content-detail" />

        <ContentDetailBody body={body} images={images} ogpData={ogpData} />

        <div className={styles.line} />

        <RelatedArticles relatedArticles={relatedArticles} />
      </div>

      <ScrollToTopButton />

      <ArticleJsonLd article={content} url={articleUrl} />
    </div>
  );
}
