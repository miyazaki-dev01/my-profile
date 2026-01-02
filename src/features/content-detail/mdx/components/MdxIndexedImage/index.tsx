"use client";

import React from "react";
import type { ContentDetailBase } from "@/features/content-detail/types/contentDetailBase";
import { useImageModal } from "@/features/content-detail/mdx/components/ImageModal/useImageModal";
import { ImageModal } from "@/features/content-detail/mdx/components/ImageModal";
import * as styles from "./style.css";

type Props = {
  idx: number;
  images: ContentDetailBase["images"];
};

/**
 * MDX本文用の画像コンポーネント
 * - idx で microCMS の images 配列を参照して表示する
 * - 画像が存在しない場合は何も表示しない
 */
export function MdxIndexedImage({ idx, images }: Props) {
  const image = images[idx];
  const { src, isOpen, open, close } = useImageModal();

  if (!image) return null;

  return (
    <>
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <img
            src={image.url}
            alt=""
            loading="lazy"
            onClick={() => open(image.url)}
            className={styles.image}
          />
        </div>
      </div>

      {src && <ImageModal src={src} isOpen={isOpen} onClose={close} />}
    </>
  );
}
