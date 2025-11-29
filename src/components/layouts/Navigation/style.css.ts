import { style } from "@vanilla-extract/css";
import { breakpoints } from "@/theme/breakpoints";

export const desktopSideNav = style({
  display: "none",
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      display: "block",
    },
  },
});

export const mobileHeaderNav = style({
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      display: "none",
    },
  },
});
