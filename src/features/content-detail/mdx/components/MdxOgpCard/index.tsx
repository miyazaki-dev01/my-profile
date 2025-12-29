import React from "react";
import type { OgpDataByUrl } from "@/features/content-detail/types/ogp";
import { ExternalLink } from "@/components/elements/Link/ExternalLink";
import { FallbackImage } from "@/components/elements/FallbackImage";
import * as styles from "./style.css";

type Props = {
  url: string;
  ogpData: OgpDataByUrl;
};

const normalizeUrl = (input: string): string | null => {
  try {
    return new URL(input).toString();
  } catch {
    return null;
  }
};

export function MdxOgpCard({ url, ogpData }: Props) {
  const normalizedUrl = normalizeUrl(url);
  const data =
    ogpData[url] ?? (normalizedUrl ? ogpData[normalizedUrl] : undefined);

  if (!data) return null;

  const { ogTitle, ogDescription, ogImage, ogUrl, favicon } = data;
  const title = ogTitle || "No Title";
  const description = ogDescription || "No description available.";
  const link = ogUrl || url;
  const imageData = Array.isArray(ogImage) ? ogImage[0] : ogImage;
  const rawImageUrl = imageData?.url ?? null;
  const imageUrl = (() => {
    if (!rawImageUrl) return undefined;
    try {
      return new URL(rawImageUrl, link).toString();
    } catch {
      return "";
    }
  })();
  const parsedUrl = (() => {
    try {
      return new URL(link);
    } catch {
      return null;
    }
  })();
  const domain = parsedUrl?.hostname ?? "";
  const faviconUrl = (() => {
    if (favicon) {
      try {
        return new URL(favicon, link).toString();
      } catch {
        return undefined;
      }
    }
  })();

  return (
    <ExternalLink href={link} className={styles.card}>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <div>
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
          </div>
          <div className={styles.meta}>
            {faviconUrl && (
              <FallbackImage
                tag="img"
                src={faviconUrl}
                className={styles.favicon}
              />
            )}
            <span className={styles.domain}>{domain}</span>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <FallbackImage tag="img" src={imageUrl} className={styles.image} />
        </div>
      </div>
    </ExternalLink>
  );
}
