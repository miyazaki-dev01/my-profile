import { style } from "@vanilla-extract/css";
import breakpoints from "@/theme/breakpoints";
import fontSizes from "@/theme/fontSize";
import fontWeight from "@/theme/fontWeight";
import space from "@/theme/space";

export const WorkingStyle = style({
  padding: "5% 8%",
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      padding: `0`,
    },
  },
});

export const titleStyle = style({
  textAlign: "center",
  fontSize: fontSizes.xxml,
  fontWeight: fontWeight.bold,
  marginBottom: space.xl,
  "@media": {
    [`screen and (max-width: ${breakpoints.mobile}px)`]: {
      fontSize: fontSizes.xxl,
      marginBottom: space.l,
    },
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontSize: fontSizes.xxxl,
      marginBottom: space.xxl,
    },
  },
});

export const workingItemStyle = style({
  width: "fit-content",
  margin: `0 auto`,
});

export const workingContentStyle = style({
  padding: `${space.l}px 0`,
  margin: "0 auto",
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      padding: `${space.xl}px 0`,
      maxWidth: "800px",
    },
  },
});

export const workingContentTitleStyle = style({
  textAlign: "center",
  fontSize: fontSizes.ml,
  fontWeight: fontWeight.bold,
  marginBottom: space.xxs,
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      marginBottom: "6px",
      fontSize: fontSizes.l,
    },
  },
});

export const workingContentItemStyle = style({
  textAlign: "center",
});

export const contactStyle = style({
  display: "flex",
  justifyContent: "center",
  marginTop: space.m,
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      margin: `${space.ml}px 0`,
    },
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      margin: `${space.xxl}px 0 ${space.l}px 0`,
    },
  },
});
