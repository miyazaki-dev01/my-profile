import type { PortfolioDetail } from "@/features/portfolio/portfolio-detail/types/portfolioDetail";
import type { OgpDataByUrl } from "@/features/content-detail/types/ogp";
import { PreviewBanner } from "@/features/content-detail/components/PreviewBanner";
import { FallbackImage } from "@/components/elements/FallbackImage";
import { ExternalLinkButton } from "@/components/elements/Button/ExternalLinkButton";
import { ContentDetailBody } from "@/features/content-detail/components/ContentDetailBody";
import { ScrollToTopButton } from "@/features/content-detail/components/ScrollToTopButton";
import * as styles from "./style.css";

type Props = {
  content: PortfolioDetail;
  showPreviewBanner: boolean;
  ogpData: OgpDataByUrl;
};

export function PortfolioDetailPage({
  content,
  showPreviewBanner,
  ogpData,
}: Props) {
  const { mainImage, title, description, serviceURL, body, images } = content;

  return (
    <div className={styles.root}>
      {showPreviewBanner && <PreviewBanner type="portfolio" />}

      <div className={styles.mainImageWrapper}>
        <FallbackImage
          tag="img"
          src={mainImage.url}
          fallbackSrc="default_main_article"
          className={styles.mainImage}
        />
      </div>

      <div className={styles.body}>
        <h1 className={styles.title}>{title}</h1>
      </div>

      <div className={styles.titleDivider} />

      <div className={styles.body}>
        <div className={styles.description}>{description}</div>

        <div className={styles.siteLinkButton}>
          <ExternalLinkButton href={serviceURL}>Visit Site</ExternalLinkButton>
        </div>

        <ContentDetailBody body={body} images={images} ogpData={ogpData} />
      </div>

      <ScrollToTopButton />
    </div>
  );
}
