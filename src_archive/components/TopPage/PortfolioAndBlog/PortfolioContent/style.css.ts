import { style } from "@vanilla-extract/css";
import breakpoints from "@/theme/breakpoints";
import fontSizes from "@/theme/fontSize";
import fontWeight from "@/theme/fontWeight";
import space from "@/theme/space";
import colors from "@/theme/colors";

export const titleStyle = style({
  textAlign: "center",
  fontSize: fontSizes.xl,
  fontWeight: fontWeight.bold,
  marginBottom: space.xml,
  scrollMarginTop: '90px',
  "@media": {
    [`screen and (max-width: ${breakpoints.mobile}px)`]: {
      fontSize: fontSizes.xxl,
      marginBottom: space.l,
      scrollMarginTop: '80px',
    },
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontSize: fontSizes.xxml,
      marginBottom: space.xxl,
      scrollMarginTop: '100px',
    },
  },
});

export const portfolioStyle = style({
  "@media": {
    [`screen and (max-width: ${breakpoints.mobile}px)`]: {
      width: "100%",
      flexDirection: "column",
      gap: space.xml,
    },
  },
  display: "flex",
  justifyContent: "space-between",
  width: "95%",
  margin: "0 auto",
});

export const viewAllStyle = style({
  border: "1px solid",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  height: "25px",
  fontSize: fontSizes.xs,
  paddingTop: space.xxs,
  paddingBottom: space.xxs,
  marginTop: space.xml,
  marginRight: "30%",
  marginLeft: "30%",
  transition: "background-color 0.5s ease, color 0.5s ease",
  ":hover": {
    backgroundColor: colors.darkWhite,
    color: colors.brack,
    cursor: "pointer",
  },
  "@media": {
    [`screen and (max-width: ${breakpoints.mobile}px)`]: {
      width: "200px",
      margin: `0 auto 0 auto`,
      border: "0.5px solid",
      fontSize: fontSizes.xxs,
      marginTop: space.xml,
    },
  },
});
