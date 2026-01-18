"use client";

import LogoSvg from "@public/logo/logo.svg";
import { useInitialLoadingContext } from "@/contexts/InitialLoadingContext";
import { Color, colors } from "@/themes/colors";
import * as styles from "./style.css";

type LogoStyles = keyof typeof styles.logoVariant;

type Props = {
  style: LogoStyles;
  fill?: Color;
  skeleton?: boolean;
  fadeIn?: boolean;
};

export function Logo({
  style,
  fill = "black",
  skeleton = false,
  fadeIn = false,
}: Props) {
  const { isInitialLoading } = useInitialLoadingContext();
  const showSkeleton = skeleton && isInitialLoading;

  const logoStyle = styles.logoVariant[style];

  return showSkeleton ? (
    <span className={`${styles.skeletonCircle} ${logoStyle}`} />
  ) : (
    <LogoSvg
      fill={colors[fill]}
      className={`${styles.logoBase} ${logoStyle} ${
        fadeIn ? styles.logoFadeIn : ""
      }`}
    />
  );
}
