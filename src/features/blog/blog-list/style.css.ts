import { style } from "@vanilla-extract/css";
import { breakpoints } from "@/themes/breakpoints";

const tbMedia = `screen and (min-width: ${breakpoints.tablet}px)`;

export const root = style({
  marginInline: "auto",
  marginTop: "1rem",
  "@media": {
    [tbMedia]: {
      maxWidth: "800px",
      marginTop: 0,
    },
  },
});

export const blogList = style({
  marginTop: "2rem",
  "@media": {
    [tbMedia]: {
      marginTop: "64px",
    },
  },
});
