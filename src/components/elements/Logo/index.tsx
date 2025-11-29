"use client";

import React from "react";
import Image from "next/image";
import { IMAGES } from "@/constants/images";
import { usePageLoadingContext } from "@/contexts/PageLoadingContext";
import * as styles from "./style.css";

type Props = {
  size?: number;
  withSkeleton?: boolean;
};

export const Logo: React.FC<Props> = React.memo(
  ({ size = 64, withSkeleton = false }) => {
    const { isLoading } = usePageLoadingContext();
    const showSkeleton = withSkeleton && isLoading;

    return showSkeleton ? (
      <span
        className={styles.skeletonCircle}
        style={{ width: size, height: size }}
      />
    ) : (
      <Image
        src={IMAGES.logo}
        alt="Logo"
        width={size}
        height={size}
        priority
        draggable={false}
      />
    );
  }
);
