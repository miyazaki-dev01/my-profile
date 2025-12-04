import { createVar, keyframes, style } from "@vanilla-extract/css";
import { colors } from "@/themes/colors";
import { breakpoints } from "@/themes/breakpoints";

// ブレイクポイント
const tbMedia = `screen and (min-width: ${breakpoints.tablet}px)`;
const pcMedia = `screen and (min-width: ${breakpoints.desktop}px)`;

// ロゴ用サイズ変数（SP/TB/PC）
export const logoSizeSpVar = createVar();
export const logoSizeTbVar = createVar();
export const logoSizePcVar = createVar();

// ロゴ本体ベース
export const logoBase = style({
  fontSize: logoSizeSpVar,
  "@media": {
    [tbMedia]: {
      fontSize: logoSizeTbVar,
    },
    [pcMedia]: {
      fontSize: logoSizePcVar,
    },
  },
});

// スケルトン（ローディング円）
const shimmer = keyframes({
  "0%": { transform: "translateX(-100%)" },
  "100%": { transform: "translateX(100%)" },
});
export const skeletonCircle = style({
  position: "relative",
  display: "block",
  borderRadius: "9999px",
  overflow: "hidden",
  background: colors.skeletonGray,
  width: logoSizeSpVar,
  height: logoSizeSpVar,
  "@media": {
    [tbMedia]: {
      width: logoSizeTbVar,
      height: logoSizeTbVar,
    },
    [pcMedia]: {
      width: logoSizePcVar,
      height: logoSizePcVar,
    },
  },
  selectors: {
    "&::before": {
      content: '""',
      position: "absolute",
      inset: 0,
      backgroundImage: `linear-gradient(90deg, transparent, ${colors.skeletonWhite}, transparent)`,
      animation: `${shimmer} 1.2s linear infinite`,
    },
  },
});

// フェードイン
const fadeInStyle = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});
export const logoFadeIn = style({
  opacity: 0,
  animationName: fadeInStyle,
  animationDuration: "0.4s",
  animationTimingFunction: "ease-in-out",
  animationFillMode: "forwards",
});

// バリアント: サイズ定義
export const sideNav = style({
  vars: {
    [logoSizeSpVar]: "64px",
    [logoSizeTbVar]: "64px",
    [logoSizePcVar]: "64px",
  },
});
export const headerNav = style({
  vars: {
    [logoSizeSpVar]: "32px",
    [logoSizeTbVar]: "32px",
    [logoSizePcVar]: "32px",
  },
});
export const notFoundHeader = style({
  vars: {
    [logoSizeSpVar]: "32px",
    [logoSizeTbVar]: "32px",
    [logoSizePcVar]: "64px",
  },
});
export const NotFoundCenter = style({
  vars: {
    [logoSizeSpVar]: "100px",
    [logoSizeTbVar]: "160px",
    [logoSizePcVar]: "160px",
  },
});
