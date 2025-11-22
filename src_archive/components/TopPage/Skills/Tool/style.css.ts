import breakpoints from "@/theme/breakpoints";
import colors from "@/theme/colors";
import fontSizes from "@/theme/fontSize";
import fontWeight from "@/theme/fontWeight";
import { style } from "@vanilla-extract/css";

export const contentsStyle = style({
  textAlign: "center",
  padding: "0 auto",
  margin: "8px 0",
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      margin: "10px 0",
    },
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      margin: "14px 0",
    },
  },
});

export const imageStyle = style({
  margin: "0 auto",
  width: fontSizes.l,
  height: fontSizes.l,
  "@media": {
    [`screen and (min-width: ${breakpoints.tablet}px)`]: {
      width: fontSizes.xl,
      height: fontSizes.xl,
    },
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      width: fontSizes.xxl,
      height: fontSizes.xxl,
    },
  },
});

export const iStyle = style({
  color: colors.brack,
  fontSize: fontSizes.l,
  "@media": {
    [`screen and (min-width: ${breakpoints.tablet}px)`]: {
      fontSize: fontSizes.xl,
    },
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontSize: fontSizes.xxl,
    },
  },
});

export const descriptionStyle = style({
  lineHeight: "14px",
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      lineHeight: "16px",
    },
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      lineHeight: "22px",
    },
  },
});

export const textStyle = style({
  fontWeight: fontWeight.normal,
  fontSize: fontSizes.xs,
  color: colors.darkGray,
  fontFamily: `"ui-monospace", SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      fontSize: fontSizes.s,
    },
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontSize: fontSizes.m,
    },
  },
});
