import { style } from "@vanilla-extract/css";
import breakpoints from "@/theme/breakpoints";
import fontWeight from "@/theme/fontWeight";
import fontSizes from "@/theme/fontSize";
import colors from "@/theme/colors";
import space from "@/theme/space";

export const titleStyle = style({
  display: "inline-flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  fontSize: fontSizes.ml,
  lineHeight: "1.5rem",
  fontWeight: fontWeight.midium,
  padding: `${space.s}px ${space.l}px`,
  selectors: {
    "&:disabled": {
      pointerEvents: "none",
    },
  },
  "@media": {
    [`screen and (min-width: ${breakpoints.tablet}px)`]: {
      fontWeight: fontWeight.bold,
      fontSize: fontSizes.l,
      lineHeight: "2rem",
      padding: `${space.s}px 10%`,
      ":hover": {
        color: colors.lightGray,
      },
    },
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontWeight: fontWeight.bold,
      fontSize: fontSizes.l,
      lineHeight: "2rem",
      padding: `${space.m}px 10%`,
      ":hover": {
        color: colors.lightGray,
      },
    },
  },
});

export const plusButtonStyle = style({
  display: "block",
  width: "1rem",
  height: "1rem",
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      width: "1.25rem",
      height: "1.25rem",
    },
    [`screen and (min-width: ${breakpoints.tablet}px)`]: {
      width: "1.5rem",
      height: "1.5rem",
    },
  },
});

export const minusButtonStyle = style({
  width: "1rem",
  height: "1rem",
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      width: "1.25rem",
      height: "1.25rem",
    },
    [`screen and (min-width: ${breakpoints.tablet}px)`]: {
      width: "1.5rem",
      height: "1.5rem",
    },
  },
});
