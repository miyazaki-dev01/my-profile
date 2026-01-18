import { style } from "@vanilla-extract/css";
import { breakpoints } from "@/themes/breakpoints";

const tbMedia = `screen and (min-width: ${breakpoints.tablet}px)`;

export const root = style({
  marginInline: "auto",
  marginTop: "1rem",
  "@media": {
    [tbMedia]: {
      maxWidth: "1052px",
      marginTop: 0,
    },
  },
});

export const gridWrapper = style({
  marginTop: "2rem",
  marginInline: "-1.5rem",
  "@media": {
    [tbMedia]: {
      marginTop: "3.5rem",
      marginInline: "auto",
    },
  },
});

export const gridContent = style({
  display: "grid",
  rowGap: "2.5rem",
  gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
  "@media": {
    [tbMedia]: {
      rowGap: "3rem",
      columnGap: "2rem",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    },
  },
});
