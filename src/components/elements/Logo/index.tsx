"use client";

import React from "react";
import LogoSvg from "@public/logo.svg";
import { usePageLoadingContext } from "@/contexts/PageLoadingContext";
import { Color, colors } from "@/theme/colors";
import * as styles from "./style.css";

type Variant = "sideNav" | "headerNav" | "notFoundHeader" | "NotFoundCenter";

type Props = {
  variant: Variant;
  fill?: Color;
  skeleton?: boolean;
  fageIn?: boolean;
};

const variantClassMap: Record<Variant, string> = {
  sideNav: styles.sideNav,
  headerNav: styles.headerNav,
  notFoundHeader: styles.notFoundHeader,
  NotFoundCenter: styles.NotFoundCenter,
};

export const Logo: React.FC<Props> = React.memo(
  ({ variant, fill = "black", skeleton = false, fageIn = false }) => {
    const { isLoading } = usePageLoadingContext();
    const showSkeleton = skeleton && isLoading;

    const variantClass = variantClassMap[variant];

    return showSkeleton ? (
      <span className={`${styles.skeletonCircle} ${variantClass}`} />
    ) : (
      <LogoSvg
        fill={colors[fill]}
        className={`${styles.logoBase} ${variantClass} ${
          fageIn ? styles.logoFadeIn : ""
        }`}
      />
    );
  }
);
