import { style } from "@vanilla-extract/css";
import breakpoints from "@/theme/breakpoints";
import colors from "@/theme/colors";
import fontSizes from "@/theme/fontSize";
import fontWeight from "@/theme/fontWeight";
import space from "@/theme/space";

export const itemStyle = style({
  display: "flex",
  alignItems: "center",
  paddingBottom: space.m,
  "@media": {
    [`screen and (min-width: ${breakpoints.tablet}px)`]: {
      paddingBottom: space.ml,
    },
  },
});

export const iconStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
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
  marginLeft: space.s,
  alignItems: "center",
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      marginLeft: space.ml,
    },
  },
});

export const contentTitleStyle = style({
  fontWeight: fontWeight.normal,
  fontSize: fontSizes.xxs,
  lineHeight: "1rem",
  color: colors.darkGray,
  fontFamily:
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace', // font-mono
  marginBottom: space.m,
  "@media": {
    [`screen and (min-width: ${breakpoints.tablet}px)`]: {
      fontSize: fontSizes.s,
      lineHeight: "1.5rem",
    },
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontSize: fontSizes.m,
    },
  },
});

export const ulStyle = style({
  listStyle: "none",
  color: colors.brack,
  lineHeight: "1.25",
});

export const textStyle = style({
  fontSize: fontSizes.xs,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  selectors: {
    "&::before": {
      content: "'▶'",
      marginRight: "0.5rem",
    },
  },
  "@media": {
    [`screen and (min-width: ${breakpoints.tablet}px)`]: {
      fontSize: fontSizes.m,
    },
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontSize: fontSizes.m,
    },
  },
});
