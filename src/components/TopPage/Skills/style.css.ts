import { style } from "@vanilla-extract/css";
import fontSizes from "@/theme/fontSize";
import fontWeight from "@/theme/fontWeight";
import space from "@/theme/space";
import breakpoints from "@/theme/breakpoints";
import colors from "@/theme/colors";

export const SkillsAndQualificationStyle = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const titleStyle = style({
  textAlign: "center",
  fontSize: fontSizes.xl,
  fontWeight: fontWeight.bold,
  marginBottom: space.xl,
  "@media": {
    [`screen and (max-width: ${breakpoints.mobile}px)`]: {
      fontSize: fontSizes.xxl,
      marginBottom: space.l,
    },
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontSize: fontSizes.xxml,
      marginBottom: space.xxl,
    },
  },
});

export const contentsStyle = style({
  width: "100%",
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      width: "80%",
    },
  },
});

export const hrStyle = style({
  borderBlockColor: colors.brack,
});

export const iStyle = style({
  color: "#080201",
});

export const contentStyle = style({
  overflow: "hidden",
  transitionProperty: "height",
  transitionDuration: "300ms",
  width: "fit-content",
  margin: `${space.s}px auto 0 auto`,
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      margin: `${space.m}px auto 0 auto`,
    },
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      margin: `${space.s}px auto 0 auto`,
    },
  },
});

export const toolContentStyle = style({
  overflow: "hidden",
  transitionProperty: "height",
  transitionDuration: "300ms",
});

export const toolContentInnerStyle = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  width: "50%",
  margin: "0 auto 6px auto",

  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      gridTemplateColumns: "1fr 1fr 1fr",
      margin: "0 auto 8px auto",
    },
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      margin: "0 auto 10px auto",
    },
  },
});

export const qualificationContentStyle = style({
  overflow: "hidden",
  transitionProperty: "height",
  transitionDuration: "300ms",
  width: "80%",
  margin: `${space.s}px auto 0 auto`,

  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      width: "fit-content",
      margin: `${space.m}px auto 0 auto`,
    },
  },
});

export const qualificationUlStyle = style({
  listStyle: "none",
  fontSize: fontSizes.xs,
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      fontSize: fontSizes.m,
    },
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontSize: fontSizes.m,
    },
  },
});
