import React from "react";
import Image from "next/image";
import * as styles from "./style.css";

type OgpImage = {
  url: string;
  width?: number | string;
  height?: number | string;
  alt?: string;
};

type Props = {
  siteUrl: string;
  ogp: {
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: OgpImage | OgpImage[];
    ogUrl?: string;
  };
};

export function OgpCard({ siteUrl, ogp }: Props) {
  // ogImage を単一に正規化（最初の画像）
  const imageData = Array.isArray(ogp.ogImage) ? ogp.ogImage[0] : ogp.ogImage;

  // 値を抽出（string で来ることもあるので number に変換）
  const imageUrl = imageData?.url;
  const imageAlt = imageData?.alt ?? "OGP Image";

  const title = ogp.ogTitle || "No Title";
  const description = ogp.ogDescription || "No description available.";
  const link = ogp.ogUrl || siteUrl;
  const domain = ogp.ogUrl ? new URL(ogp.ogUrl).hostname : "";

  return (
    <>
      {ogp && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <div className={styles.content}>
            <div className={styles.textContainer}>
              <p className={`${styles.title} line-clamp-1`}>{title}</p>
              <p className={`${styles.description} line-clamp-1`}>
                {description}
              </p>
              {domain && <p className={styles.domain}>{domain}</p>}
            </div>
            <div className={styles.imageWrapper}>
              {imageUrl ? (
                <img src={imageUrl} alt={imageAlt} className={styles.image} />
              ) : (
                <Image
                  src="/theme/no_image.png"
                  width={800}
                  height={500}
                  alt="no-image"
                  className={styles.image}
                />
              )}
            </div>
          </div>
        </a>
      )}
    </>
  );
}
