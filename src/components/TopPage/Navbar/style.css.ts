import { style } from "@vanilla-extract/css";
import colors from "@/theme/colors";
import fontSizes from "@/theme/fontSize";
import space from "@/theme/space";
import breakpoints from "@/theme/breakpoints";
import fontWeight from "@/theme/fontWeight";

export const headerStyle = style({
  backgroundColor: colors.paleWhite,
  color: colors.brack,
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: 50,
  boxShadow: `0 5px 5px ${colors.lightGray}`,
  "@media": {
    [`screen and (max-width: ${breakpoints.mobile}px)`]: {
      paddingBlock: "10px",
    },
  },
});

export const navStyle = style({
  maxWidth: breakpoints.maxWith,
  width: "100%",
  margin: "0 auto",
  paddingLeft: space.ml,
  paddingRight: space.ml,
  display: "block",
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
  },
});

export const iconStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const hoemButtonStyle = style({
  flex: "none",
  fontSize: fontSizes.l,
  fontWeight: fontWeight.bold,
  outline: "none",
  "@media": {
    [`screen and (max-width: ${breakpoints.mobile}px)`]: {
      fontSize: fontSizes.ml,
    },
  },
});

export const menueButtonStyle = style({
  position: "relative",
  width: "1.75rem",
  height: "1.75rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  outline: "none",
  selectors: {
    "&:disabled": {
      pointerEvents: "none",
    },
  },
});
export const openButton = style({
  flexShrink: 0,
  width: "20px",
  height: "20px",
});

export const closeButton = style({
  flexShrink: 0,
  width: "20px",
  height: "20px",
});

export const contentStyle = style({
  overflow: "hidden",
  transition: "all 300ms",
  flexBasis: "100%",
  flexGrow: 1,
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      display: "block",
      overflow: "visible",
    },
  },
});

export const contentItemStyle = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: space.ml,
  marginTop: space.ml,
  marginBottom: space.s,
  fontSize: fontSizes.s,
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
      marginTop: "0",
      marginBottom: "0",
      gap: space.ml,
      fontSize: fontSizes.m,
    },
  },
});
