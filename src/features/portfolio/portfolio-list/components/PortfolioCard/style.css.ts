import { style } from "@vanilla-extract/css";
import { breakpoints } from "@/themes/breakpoints";
import { colors } from "@/themes/colors";

const tbMedia = `screen and (min-width: ${breakpoints.tablet}px)`;
const pcMedia = `screen and (min-width: ${breakpoints.desktop}px)`;

export const portfolioCard = style({
  width: "100%",
  textAlign: "left",
  "@media": {
    [pcMedia]: {
      display: "block",
      transitionProperty: "transform",
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      transitionDuration: ".3s",
      selectors: {
        "&:hover": {
          transform: "scale(0.98)",
        },
      },
    },
  },
});

export const thumbnailContainer = style({
  position: "relative",
  paddingBottom: "75%",
  overflow: "hidden",
  width: "100%",
  "@media": {
    [tbMedia]: {
      borderRadius: ".25rem",
    },
  },
});

export const thumbnailContent = style({
  position: "absolute",
  objectFit: "cover",
  inset: 0,
  width: "100%",
  height: "100%",
  pointerEvents: "none",
});

export const textContainer = style({
  paddingTop: "1rem",
  paddingInline: "1.5rem",
  width: "100%",
  "@media": {
    [tbMedia]: {
      paddingInline: ".5rem",
    },
  },
});

export const title = style({
  fontFamily: "var(--font-roboto)",
  fontSize: "16px",
  letterSpacing: 0,
  lineHeight: 1.5,
  WebkitLineClamp: 1,
  overflow: "hidden",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  overflowWrap: "break-word",
  "@media": {
    [tbMedia]: {
      fontSize: "18px",
      letterSpacing: ".025em",
      lineHeight: 1.7,
    },
  },
});

export const description = style({
  fontFamily: "var(--font-roboto)",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  overflowWrap: "break-word",
  WebkitLineClamp: 2,
  width: "100%",
  verticalAlign: "top",
  color: colors.black_40,
  fontSize: "12px",
  lineHeight: 1.3,
  letterSpacing: 0,
  marginTop: ".5rem",
  "@media": {
    [tbMedia]: {
      fontSize: "14px",
    },
  },
});
