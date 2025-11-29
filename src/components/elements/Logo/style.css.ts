import { keyframes, style } from "@vanilla-extract/css";
import { colors } from "@/theme/colors";

// スケルトンアニメーション
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
