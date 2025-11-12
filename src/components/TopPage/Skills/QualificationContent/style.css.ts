import { style } from "@vanilla-extract/css";
import breakpoints from "@/theme/breakpoints";
import space from "@/theme/space";

export const qualificationLiStyle = style({
  marginBottom: space.xs,
  selectors: {
    "&::before": {
      content: "'■'",
      marginRight: space.xs,
      verticalAlign: "middle",
    },
  },
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      selectors: {
        "&::before": {
          marginRight: space.m,
        },
      },
    },
  },
});

export const qualificationSpanStyle = style({
  verticalAlign: "-0.18em",
});
