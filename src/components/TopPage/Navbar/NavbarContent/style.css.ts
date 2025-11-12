import { style } from "@vanilla-extract/css";
import fontWeight from "@/theme/fontWeight";
import colors from "@/theme/colors";
import space from "@/theme/space";
import breakpoints from "@/theme/breakpoints";
import fontSizes from "@/theme/fontSize";

export const itemStyle = style({
  fontWeight: fontWeight.normal,
  ":hover": {
    color: colors.lightGray,
  },
});

export const dropdownStyle = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
});

export const dropdownButtonStyle = style({
  display: "flex",
  alignItems: "center",
  fontWeight: fontWeight.normal,
  ":hover": {
    color: colors.lightGray,
  },
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      paddingTop: "18px",
      paddingBottom: "18px",
    },
  },
});

export const dropdownIconStyle = style({
  transitionDuration: "300ms",
  flexShrink: 0,
  inlineSize: "1rem",
  blockSize: "1rem",
  marginLeft: space.xxs,
});

export const dropdownMenuStyle = style({
  backgroundColor: colors.paleWhite,
  width: "70px",

  selectors: {
    "&::before": {
      position: "absolute",
      content: "",
    },
  },
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      overflow: "hidden",
      zIndex: 10,
      top: "95%",
      width: "100px",
      left: "50%",
      transform: "translateX(-50%)",
      borderRadius: "3px",
      boxShadow: `0 0 10px ${colors.lightGray}`,
      transitionProperty: "opacity, margin",
      transitionDuration: "150ms",
      transitionTimingFunction: "ease-in-out",
    },
  },
});

export const dropdownColStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: space.m,
  marginTop: space.m,
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      marginTop: "0px",
      gap: "0px",
    },
  },
});

export const dropdownLinkStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  outline: "none",
  transition: "background-color 0.5s ease, color 0.5s ease",
  color: colors.brack,
  fontSize: fontSizes.xs,
  paddingBlock: "0px",
  paddingLeft: space.s,

  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      fontSize: fontSizes.s,
      paddingBlock: space.s,
      paddingInline: space.s,
      selectors: {
        "&:hover": {
          color: colors.darkWhite,
          backgroundColor: colors.brack,
        },
        "&:focus": {
          color: colors.darkWhite,
          backgroundColor: colors.brack,
        },
      },
    },
  },
});
