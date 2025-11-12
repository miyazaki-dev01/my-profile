import breakpoints from "@/theme/breakpoints";
import colors from "@/theme/colors";
import fontSizes from "@/theme/fontSize";
import fontWeight from "@/theme/fontWeight";
import { style } from "@vanilla-extract/css";

export const portfolioAndBlogStyle = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
});

export const mainStyle = style({
  marginTop: "50px",
  paddingBottom: "50px",
  flexGrow: 1,
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      paddingRight: "4rem",
      paddingLeft: "4rem",
      paddingBottom: "5rem",
      marginLeft: "230px",
      marginTop: "3.5rem",
    },
  },
});

export const divStyle = style({
  display: "flex",
  flexDirection: "column",
  maxWidth: "1052px",
  width: "100%",
  height: "100%",
  marginRight: "auto",
  marginLeft: "auto",
  marginTop: "2rem",
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      marginTop: "0px",
    },
  },
});

export const footerStyle = style({
  color: colors.darkGray,
  fontWeight: fontWeight.normal,
  paddingTop: "1.25rem",
  paddingBottom: "1.25rem",
  paddingLeft: "1.5rem",
  flexShrink: 0,
  zIndex: 40,
  fontSize: fontSizes.xs,
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      display: "none",
    },
  },
});
