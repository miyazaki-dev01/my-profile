import { style } from "@vanilla-extract/css";
import { breakpoints } from "@/themes/breakpoints";
import { colors } from "@/themes/colors";

const tbMedia = `screen and (min-width: ${breakpoints.tablet}px)`;
const pcMedia = `screen and (min-width: ${breakpoints.desktop}px)`;

export const brandLogoLink = style({
  width: "fit-content",
  marginTop: "1.25rem",
  marginLeft: "1.5rem",
  "@media": {
    [pcMedia]: {
      marginLeft: "2.5rem",
      marginTop: "4rem",
    },
  },
});

export const main = style({
  flexGrow: 1,
  paddingInline: "1.5rem",
  "@media": {
    [tbMedia]: {
      paddingInline: 0,
    },
  },
});

export const gridContainer = style({
  display: "grid",
  minHeight: "100%",
  placeContent: "center",
  rowGap: "2rem",
});

export const logoWrapper = style({
  marginInline: "auto",
});

export const gridBody = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
});

export const notFoundMessage = style({
  fontFamily: "var(--font-roboto)",
  color: colors.white,
  fontSize: "14px",
  lineHeight: 1.7,
  letterSpacing: 0,
  maxWidth: "327px",
  whiteSpace: "pre-line",
  textAlign: "center",
});

export const notFoundButton = style({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  lineHeight: 1,
  borderRadius: ".5rem",
  height: "2rem",
  fontSize: "13px",
  fontFamily: "var(--font-roboto)",
  letterSpacing: 0,
  paddingInline: "1rem",
  justifyContent: "center",
  color: colors.white,
  border: `1px solid ${colors.white}`,
  backgroundColor: "transparent",

  selectors: {
    "&:active": {
      backgroundColor: colors.white,
      color: colors.black,
      borderColor: colors.white,
    },
  },

  "@media": {
    [pcMedia]: {
      transitionProperty: "background-color, color, border-color",
      transitionDuration: "0.3s",
      transitionTimingFunction: "ease-in-out",

      selectors: {
        "&:hover": {
          backgroundColor: colors.white,
          color: colors.black,
          borderColor: colors.white,
        },
      },
    },
  },
});

export const footer = style({
  display: "flex",
  alignItems: "center",
  zIndex: 40,
  height: "60px",
  paddingLeft: "1.5rem",
  "@media": {
    [tbMedia]: {
      paddingLeft: "2.5rem",
    },
  },
});

export const footerText = style({
  fontSize: "11px",
  fontWeight: 500,
  lineHeight: 1,
  letterSpacing: 0,
});
