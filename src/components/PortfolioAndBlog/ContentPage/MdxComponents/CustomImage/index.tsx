import React from "react";
import Image from "next/image";
import * as styles from "./style.css";

type CustomImageProps = {
  idx: number;
  images: {
    url: string;
    height: number;
    width: number;
  }[];
};

export const CustomImage = ({ idx, images }: CustomImageProps) => {
  const image = images[idx];

  if (!image) return null;

  return (
    <div className={styles.imageWrapper}>
      <Image
        src={image.url}
        height={image.height}
        width={image.width}
        alt={`画像${idx + 1}`}
        className={styles.image}
      />
    </div>
  );
};
