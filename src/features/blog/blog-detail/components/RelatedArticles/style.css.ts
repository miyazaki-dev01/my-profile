import { style } from "@vanilla-extract/css";
import { breakpoints } from "@/themes/breakpoints";

const tbMedia = `screen and (min-width: ${breakpoints.tablet}px)`;
const pcMedia = `screen and (min-width: ${breakpoints.desktop}px)`;

export const title = style({
  fontFamily: "var(--font-roboto)",
  fontWeight: 700,
  fontSize: "22px",
  lineHeight: 1.2,
  "@media": {
    [tbMedia]: {
      fontSize: "24px",
    },
  },
});

export const articlesList = style({
  marginTop: "2.5rem",
  "@media": {
    [pcMedia]: {
      marginTop: "3rem",
    },
  },
});
