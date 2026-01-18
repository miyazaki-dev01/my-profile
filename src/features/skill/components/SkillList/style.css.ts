import { style } from "@vanilla-extract/css";
import { breakpoints } from "@/themes/breakpoints";

const tbMedia = `screen and (min-width: ${breakpoints.tablet}px)`;
const pcMedia = `screen and (min-width: ${breakpoints.desktop}px)`;

export const skillList = style({
  marginTop: "1.5rem",

  "@media": {
    [tbMedia]: {
      display: "grid",
      gridTemplateColumns: "repeat(2,minmax(0,1fr))",
      gap: "2rem",
      marginTop: "3rem",
    },
    [pcMedia]: {
      gridTemplateColumns: "repeat(3,minmax(0,1fr))",
      gap: "1rem",
    },
  },
});
