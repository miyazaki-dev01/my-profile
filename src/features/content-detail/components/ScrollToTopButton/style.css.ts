import { style } from "@vanilla-extract/css";
import { colors } from "@/themes/colors";
import { breakpoints } from "@/themes/breakpoints";

const tbMedia = `screen and (min-width: ${breakpoints.tablet}px)`;
const pcMedia = `screen and (min-width: ${breakpoints.desktop}px)`;

export const button = style({
  position: "fixed",
  right: "24px",
  bottom: "24px",
  zIndex: 50,
  width: "40px",
  height: "40px",
  borderRadius: "9999px",
  background: colors.black,
  border: "none",
  display: "grid",
  placeItems: "center",
  cursor: "pointer",
  opacity: 0,
  pointerEvents: "none",
  transition: "opacity 200ms ease",
  selectors: {
    '&[data-visible="true"]': {
      opacity: 1,
      pointerEvents: "auto",
    },
  },
  "@media": {
    [tbMedia]: {
      right: "32px",
      bottom: "32px",
    },
    [pcMedia]: {
      right: "40px",
      bottom: "40px",
    },
  },
});

export const icon = style({
  width: "30px",
  height: "30px",
  fill: "none",
  stroke: colors.white,
  strokeWidth: 2,
  strokeLinecap: "square",
  strokeLinejoin: "miter",
});
