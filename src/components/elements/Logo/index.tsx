"use client";

import React from "react";
import LogoSvg from "@public/logo/logo.svg";
import { usePageLoadingOptional } from "@/contexts/PageLoadingContext";
import { Color, colors } from "@/theme/colors";
import * as styles from "./style.css";

type Variant = "sideNav" | "headerNav" | "notFoundHeader" | "NotFoundCenter";

type Props = {
  variant: Variant;
  fill?: Color;
  skeleton?: boolean;
  fadeIn?: boolean;
};

const variantClassMap: Record<Variant, string> = {
  sideNav: styles.sideNav,
  headerNav: styles.headerNav,
  notFoundHeader: styles.notFoundHeader,
  NotFoundCenter: styles.NotFoundCenter,
};

export function Logo({
  variant,
  fill = "black",
  skeleton = false,
  fadeIn = false,
}: Props) {
  const { isLoading } = usePageLoadingOptional();
  const showSkeleton = skeleton && isLoading;

  const variantClass = variantClassMap[variant];

  return showSkeleton ? (
    <span className={`${styles.skeletonCircle} ${variantClass}`} />
  ) : (
    <LogoSvg
      fill={colors[fill]}
      className={`${styles.logoBase} ${variantClass} ${
        fadeIn ? styles.logoFadeIn : ""
      }`}
    />
  );
}
