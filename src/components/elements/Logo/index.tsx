"use client";

import React from "react";
import LogoSvg from "@public/logo/logo.svg";
import { useInitialLoadingContext } from "@/contexts/InitialLoadingContext";
import { Color, colors } from "@/themes/colors";
import * as styles from "./style.css";

type LogoStyles = "sideNav" | "headerNav" | "notFoundHeader" | "notFoundCenter";

type Props = {
  logoStyle: LogoStyles;
  fill?: Color;
  skeleton?: boolean;
  fadeIn?: boolean;
};

const logoStyleClassMap: Record<LogoStyles, string> = {
  sideNav: styles.sideNav,
  headerNav: styles.headerNav,
  notFoundHeader: styles.notFoundHeader,
  notFoundCenter: styles.NotFoundCenter,
};

export function Logo({
  logoStyle,
  fill = "black",
  skeleton = false,
  fadeIn = false,
}: Props) {
  const { isInitialLoading } = useInitialLoadingContext();
  const showSkeleton = skeleton && isInitialLoading;

  const logoStyleClass = logoStyleClassMap[logoStyle];

  return showSkeleton ? (
    <span className={`${styles.skeletonCircle} ${logoStyleClass}`} />
  ) : (
    <LogoSvg
      fill={colors[fill]}
      className={`${styles.logoBase} ${logoStyleClass} ${
        fadeIn ? styles.logoFadeIn : ""
      }`}
    />
  );
}
