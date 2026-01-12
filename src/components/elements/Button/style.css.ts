import { style } from "@vanilla-extract/css";
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

export const buttonBlack = style({
  background: colors.black,
  color: colors.white,
  selectors: {
    "&:active": {
      background: colors.buttonHoverBackground,
      color: colors.black,
    },
  },

  "@media": {
    [pcMedia]: {
      transitionProperty: "background-color, color, border",
      transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
      transitionDuration: ".3s",
      selectors: {
        "&:hover": {
          background: colors.buttonHoverBackground,
          color: colors.black,
        },
      },
    },
  },
});
