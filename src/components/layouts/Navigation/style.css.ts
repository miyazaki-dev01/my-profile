import { style } from "@vanilla-extract/css";
import { breakpoints } from "@/themes/breakpoints";

const pcMedia = `screen and (min-width: ${breakpoints.desktop}px)`;

export const desktopSideNav = style({
  display: "none",
  "@media": {
    [pcMedia]: {
      display: "block",
    },
  },
});

export const mobileHeaderNav = style({
  "@media": {
    [pcMedia]: {
      display: "none",
    },
  },
});
