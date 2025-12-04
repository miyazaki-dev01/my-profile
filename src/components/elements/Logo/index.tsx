"use client";

import React from "react";
import LogoSvg from "@public/logo/logo.svg";
import { useInitialLoadingContext } from "@/contexts/InitialLoadingContext";
import { Color, colors } from "@/themes/colors";
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
  const { isInitialLoading } = useInitialLoadingContext();
  const showSkeleton = skeleton && isInitialLoading;

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
