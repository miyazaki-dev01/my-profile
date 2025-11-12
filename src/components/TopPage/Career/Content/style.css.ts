import { style } from "@vanilla-extract/css";
import breakpoints from "@/theme/breakpoints";
import colors from "@/theme/colors";
import fontSizes from "@/theme/fontSize";
import fontWeight from "@/theme/fontWeight";
import space from "@/theme/space";

export const containerStyle = style({
  display: "flex",
  columnGap: space.xs,
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      columnGap: "10px",
    },
  },
});

export const lineStyle = style({
  width: "8px",
  minWidth: "8px",
  marginTop: space.l,
  height: "2px",
  backgroundColor: colors.darkWhite,
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      width: "13px",
      minWidth: "13px",
    },
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      marginTop: space.xl,
    },
  },
});

export const contentStyle = style({
  backgroundColor: colors.paleWhite,
  padding: "7px 10px",
  maxWidth: "1100px",
  marginTop: space.s,
  borderRadius: "2px",
  marginRight: "3%",
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      padding: "8px 15px",
    },
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      marginRight: "0",
      padding: "10px 15px",
      borderRadius: "3px",
      marginTop: space.m,
    },
  },
});

export const dateStyle = style({
  color: colors.darkGray,
  fontSize: fontSizes.xxs,
  "@media": {
    [`screen and (min-width: ${breakpoints.tablet}px)`]: {
      fontSize: fontSizes.xs,
    },
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontSize: fontSizes.s,
    },
  },
});

export const titleStyle = style({
  color: colors.brack,
  fontSize: fontSizes.s,
  fontWeight: fontWeight.bold,
  marginBottom: space.xxs,
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      fontSize: fontSizes.m,
    },
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontSize: "18px",
      marginBottom: "6px",
    },
  },
});

export const textStyle = style({
  color: colors.brack,
  fontSize: fontSizes.xxs,
  lineHeight: "13px",
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      fontSize: fontSizes.xs,
      lineHeight: "14px",
    },
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontSize: fontSizes.s,
      lineHeight: "16px",
    },
  },
});
