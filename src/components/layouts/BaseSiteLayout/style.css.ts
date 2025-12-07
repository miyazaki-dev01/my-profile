import { style } from "@vanilla-extract/css";
import { breakpoints } from "@/themes/breakpoints";

const tbMedia = `screen and (min-width: ${breakpoints.tablet}px)`;
const pcMedia = `screen and (min-width: ${breakpoints.desktop}px)`;

export const main = style({
  flexGrow: 1,
  paddingInline: "24px",
  paddingBottom: "60px",
  marginTop: "60px",
  "@media": {
    [tbMedia]: {
      paddingInline: "64px",
      paddingBottom: "80px",
      marginTop: "96px",
    },
    [pcMedia]: {
      paddingInline: "64px",
      paddingBottom: "80px",
      marginTop: "80px",
      marginLeft: "260px",
    },
  },
});

export const footer = style({
  display: "flex",
  flexDirection: "column",
  padding: "20px 0 24px 24px",
  flexShrink: 0,
  zIndex: 40,
  "@media": {
    [tbMedia]: {
      flexDirection: "row",
      alignItems: "center",
      padding: "0 0 0 40px",
      height: "60px",
    },
  },
});
