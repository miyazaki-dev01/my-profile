import { style } from "@vanilla-extract/css";
import breakpoints from "@/theme/breakpoints";
import fontSizes from "@/theme/fontSize";
import fontWeight from "@/theme/fontWeight";
import space from "@/theme/space";

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

export const CareerStyle = style({
  width: "fit-content",
  margin: "0 auto",
});

export const CareerItemStyle = style({
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      padding: "0 8%",
    },
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      padding: "0 10%",
    },
  },
});

export const CareerContentStyle = style({
  flexGrow: 1,
  paddingBottom: space.l,
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      paddingBottom: space.xl,
    },
  },
});

export const CareerTitleStyle = style({
  fontWeight: fontWeight.bold,
  fontSize: fontSizes.l,
  paddingLeft: space.xs,
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      fontSize: fontSizes.xl,
    },
  },
});
