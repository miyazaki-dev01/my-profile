import fontSizes from "@/theme/fontSize";
import { ComplexStyleRule, styleVariants } from "@vanilla-extract/css";
import breakpoints from "@/theme/breakpoints";

export type ImageSize = "small" | "medium";

const IMAGE_SIZE_VARIANTS = {
  small: {
    width: fontSizes.l,
    height: fontSizes.l,
    "@media": {
      [`screen and (min-width: ${breakpoints.mobile}px)`]: {
        width: fontSizes.xl,
        height: fontSizes.xl,
      },
    },
  },
  medium: {
    width: fontSizes.xl,
    height: fontSizes.xl,
    "@media": {
      [`screen and (min-width: ${breakpoints.mobile}px)`]: {
        width: fontSizes.xxml,
        height: fontSizes.xxml,
      },
    },
  }
} as const satisfies Record<ImageSize, ComplexStyleRule>;

export const imageStyle = styleVariants(IMAGE_SIZE_VARIANTS, (style) => ({
  transition: "transform 0.2s ease",
  ":hover": {
    transform: "scale(1.3)",
  },
  ...style,
}))
