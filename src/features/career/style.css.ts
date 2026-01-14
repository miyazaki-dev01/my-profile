import { style } from "@vanilla-extract/css";
import { breakpoints } from "@/themes/breakpoints";
import { colors } from "@/themes/colors";

const tbMedia = `screen and (min-width: ${breakpoints.tablet}px)`;
const pcMedia = `screen and (min-width: ${breakpoints.desktop}px)`;

export const root = style({
  maxWidth: "600px",
  width: "100%",
  marginTop: "1rem",
  marginInline: "auto",
  "@media": {
    [tbMedia]: {
      marginTop: 0,
    },
  },
});

export const pcStickyBlock = style({
  position: "static",
  display: "contents",

  "@media": {
    [pcMedia]: {
      position: "sticky",
      display: "block",
      top: 0,
      zIndex: 1,
      marginInline: "-1.5rem",
      marginTop: "-5rem",
      width: "calc(100% + 48px)",
      backgroundColor: colors.white,
      paddingInline: "1.5rem",
      paddingTop: "5rem",
    },
  },
});

export const spStickyBlock = style({
  position: "sticky",
  top: "60px",
  marginInline: "-1.5rem",
  marginTop: "2rem",
  backgroundColor: colors.white_94,
  backdropFilter: "blur(10px)",
  zIndex: 1,

  "@media": {
    [tbMedia]: {
      marginInline: 0,
      paddingInline: 0,
    },
    [pcMedia]: {
      position: "static",
      top: "auto",
      background: "transparent",
      backdropFilter: "none",
      zIndex: 0,
    },
  },
});
