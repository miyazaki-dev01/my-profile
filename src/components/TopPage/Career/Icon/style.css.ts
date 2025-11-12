import { style } from "@vanilla-extract/css";
import breakpoints from "@/theme/breakpoints";
import colors from "@/theme/colors";

export const iconStyle = style({
  position: "relative",
  selectors: {
    "&::after": {
      content: '""',
      position: "absolute",
      top: "25px",
      bottom: "0",
      insetInlineStart: "14px",
      width: "2px",
      transform: "translateX(-1px)",
      backgroundColor: colors.darkWhite,
    },
    "&:last-child::after": {
      display: "none",
    },
  },
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      selectors: {
        "&::after": {
          top: "28px",
        },
      },
    },
  },
});

export const iconContainer = style({
  position: "relative",
  zIndex: 10,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "28px",
  height: "28px",
});

export const circleStyle = style({
  width: "12px",
  height: "12px",
  borderRadius: "9999px",
  backgroundColor: colors.darkWhite,
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      width: "16px",
      height: "16px",
    },
  },
});
