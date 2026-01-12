import { style, styleVariants } from "@vanilla-extract/css";
import { breakpoints } from "@/themes/breakpoints";
import { colors } from "@/themes/colors";

const pcMedia = `screen and (min-width: ${breakpoints.desktop}px)`;

export const buttonBase = style({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: ".5rem",
  cursor: "pointer",
});

export const buttonColor = styleVariants({
  black: {
    background: colors.black,
    color: colors.white,
    selectors: {
      "&:active": {
        background: colors.buttonHoverBackground,
        color: colors.black,
      },
      "&:disabled": {
        background: colors.black_12,
        color: colors.black_20,
        cursor: "default",
      },
      '&[data-loading="true"], &[data-loading="true"]:disabled': {
        background: colors.black,
        color: colors.white,
      },
    },
    "@media": {
      [pcMedia]: {
        transitionProperty: "background-color, color, border",
        transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
        transitionDuration: ".3s",
        selectors: {
          "&:not(:disabled):hover": {
            background: colors.buttonHoverBackground,
            color: colors.black,
          },
        },
      },
    },
  },
  white: {
    background: colors.inputBackgroundGray,
    color: colors.black,
    selectors: {
      "&:active": {
        background: colors.lightGray,
        color: colors.black,
      },
      "&:disabled": {
        opacity: 0.5,
        cursor: "default",
      },
      '&[data-loading="true"], &[data-loading="true"]:disabled': {
        opacity: 1,
      },
    },
    "@media": {
      [pcMedia]: {
        transitionProperty: "background-color, color, border",
        transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
        transitionDuration: ".3s",
        selectors: {
          "&:not(:disabled):hover": {
            background: colors.lightGray,
            color: colors.black,
          },
        },
      },
    },
  },
});
