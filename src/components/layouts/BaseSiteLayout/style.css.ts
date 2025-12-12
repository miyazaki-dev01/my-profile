import { style } from "@vanilla-extract/css";
import { breakpoints } from "@/themes/breakpoints";

const tbMedia = `screen and (min-width: ${breakpoints.tablet}px)`;
const pcMedia = `screen and (min-width: ${breakpoints.desktop}px)`;

export const main = style({
  flexGrow: 1,
  paddingInline: "1.5rem",
  paddingBottom: "60px",
  marginTop: "60px",
  "@media": {
    [tbMedia]: {
      paddingInline: "4rem",
      paddingBottom: "5rem",
      marginTop: "6rem",
    },
    [pcMedia]: {
      paddingInline: "4rem",
      paddingBottom: "5rem",
      marginTop: "5rem",
      marginLeft: "260px",
    },
  },
});

export const footer = style({
  display: "flex",
  flexDirection: "column",
  padding: "1.25rem 0 1.5rem 1.5rem",
  flexShrink: 0,
  zIndex: 40,
  "@media": {
    [tbMedia]: {
      flexDirection: "row",
      alignItems: "center",
      padding: "0 0 0 2.5rem",
      height: "60px",
    },
  },
});
