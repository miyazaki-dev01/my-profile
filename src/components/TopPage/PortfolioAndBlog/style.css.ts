import breakpoints from "@/theme/breakpoints";
import { style } from "@vanilla-extract/css";

export const PortfolioAndBlogStyle = style({
    display: "flex",
    flexDirection: "column",
    gap: '70px',
    "@media": {
    [`screen and (max-width: ${breakpoints.mobile}px)`]: {
        gap: '60px',
    },
  },
});