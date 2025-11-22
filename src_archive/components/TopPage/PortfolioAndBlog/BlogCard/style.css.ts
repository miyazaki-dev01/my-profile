import { style } from "@vanilla-extract/css";
import { globalStyle } from "@vanilla-extract/css";
import colors from "@/theme/colors";
import fontSizes from "@/theme/fontSize";
import space from "@/theme/space";
import breakpoints from "@/theme/breakpoints";
import fontWeight from "@/theme/fontWeight";

globalStyle(".swiper-pagination-bullet", {
  backgroundColor: colors.lightGray,
});

globalStyle(".swiper-pagination-bullet-active", {
  backgroundColor: colors.darkWhite,
});

globalStyle(".swiper-pagination", {
  bottom: "var(--swiper-pagination-bottom, 0px) !important",
});

export const cardStyle = style({
  "@media": {
    [`screen and (max-width: ${breakpoints.mobile}px)`]: {
      width: "90%",
      margin: "0 auto",
      paddingBottom: "25px",
    },
  },
});

export const imageAStyle = style({
  display: "block",
  border: "2px solid",
  height: "150px",
  width: "100%",
  overflow: "hidden",
  boxSizing: "border-box",
  "@media": {
    [`screen and (max-width: ${breakpoints.mobile}px)`]: {
      height: "140px",
    },
  },
});

export const imageStyle = style({
  height: "100%",
  width: "100%",
  objectFit: "cover",
  transition: "transform 0.4s ease",
  selectors: {
    [`${cardStyle}:hover &`]: {
      transform: "scale(1.1)",
    },
  },
});

export const descriptionStyle = style({
  display: "block",
});

export const categoryAndDateStyle = style({
  display: "flex",
  padding: `${space.xs}px 0 ${space.xxs}px 0`,
  alignItems: "center",
});

export const categoryStyle = style({
  backgroundColor: colors.darkWhite,
  color: colors.brack,
  borderRadius: "100vh",
  fontSize: fontSizes.xs,
  fontWeight: fontWeight.normal,
  padding: `2.5px 8px`,
  "@media": {
    [`screen and (max-width: ${breakpoints.mobile}px)`]: {
      fontSize: fontSizes.xxs,
      padding: `3px 6px`,
    },
  },
});

export const dateStyle = style({
  color: colors.lightGray,
  fontSize: fontSizes.xs,
  margin: "0 2% 0 auto",
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      fontSize: fontSizes.s,
    },
  },
});

export const titleStyle = style({
  lineBreak: "anywhere",
  fontSize: fontSizes.m,
  fontWeight: fontWeight.bold,
  lineHeight: 1.3,
  marginTop: space.xs,
  "@media": {
    [`screen and (max-width: ${breakpoints.mobile}px)`]: {
      fontSize: fontSizes.m,
      fontWeight: fontWeight.normal,
    },
  },
});
