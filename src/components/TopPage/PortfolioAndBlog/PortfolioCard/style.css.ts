import breakpoints from "@/theme/breakpoints";
import fontSizes from "@/theme/fontSize";
import fontWeight from "@/theme/fontWeight";
import space from "@/theme/space";
import { style } from "@vanilla-extract/css";

export const PortfolioCardStyle = style({
  width: "47%",
  transition: "transform 0.3s ease",
  selectors: {
    "&:hover": {
      transform: "scale(0.97)",
    },
  },
  "@media": {
    [`screen and (max-width: ${breakpoints.mobile}px)`]: {
      width: "100%",
    },
  },
});

export const imageAStyle = style({
  display: "block",
  height: "250px",
  width: "100%",
  overflow: "hidden",
  boxSizing: "border-box",
  "@media": {
    [`screen and (max-width: ${breakpoints.mobile}px)`]: {
      height: "200px",
    },
  },
});

export const imageStyle = style({
  height: "100%",
  width: "100%",
  objectFit: "cover",
});

export const titleStyle = style({
  paddingTop: space.m,
  fontSize: fontSizes.ml,
  fontWeight: fontWeight.bold,
  "@media": {
    [`screen and (max-width: ${breakpoints.mobile}px)`]: {
      paddingTop: space.xs,
      fontSize: fontSizes.m,
    },
  },
});

export const descriptionStyle = style({
  fontSize: fontSizes.s,
  paddingTop: space.xxs,
  "@media": {
    [`screen and (max-width: ${breakpoints.mobile}px)`]: {
      fontSize: fontSizes.xs,
      lineHeight: "1.3",
    },
  },
});
