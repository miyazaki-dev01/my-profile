import { style } from "@vanilla-extract/css";
import breakpoints from "@/theme/breakpoints";
import colors from "@/theme/colors";
import fontSizes from "@/theme/fontSize";

export const contentstyle = style({
  display: "flex",
  alignItems: "center",
  lineHeight: "20px",
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      lineHeight: "22px",
    },
  },
});

export const iconStyle = style({
  backgroundColor: colors.brack,
  width: "6px",
  height: "6px",
  display: "inline-block",
  borderRadius: "9999px",
  marginInlineEnd: "6px",
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      marginInlineEnd: "8px",
    },
  },
});

export const textStyle = style({
  fontSize: fontSizes.s,
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      fontSize: fontSizes.m,
    },
  },
});
