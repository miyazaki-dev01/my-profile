import { style } from "@vanilla-extract/css";
import { colors } from "@/themes/colors";
import { breakpoints } from "@/themes/breakpoints";

const tbMedia = `screen and (min-width: ${breakpoints.tablet}px)`;

export const root = style({
  marginTop: "1rem",
  "@media": {
    [tbMedia]: {
      width: "600px",
      marginTop: 0,
      marginInline: "auto",
    },
  },
});

export const description = style({
  fontFamily: "var(--font-roboto)",
  fontSize: "14px",
  lineHeight: 1.7,
  letterSpacing: 0,
  whiteSpace: "pre-line",
  marginTop: "1rem",
  marginBottom: "2rem",
  "@media": {
    [tbMedia]: {
      marginBottom: "2.5rem",
    },
  },
});

export const form = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  marginBottom: "2rem",
  "@media": {
    [tbMedia]: {
      gap: "1.5rem",
      marginBottom: "2.5rem",
      paddingBottom: "2.5rem",
      borderBottom: `.5px solid ${colors.black_10}`,
    },
  },
});

export const buttonRow = style({
  display: "flex",
  justifyContent: "flex-end",
});

export const button = style({
  fontFamily: "var(--font-roboto)",
  fontSize: "16px",
  fontWeight: 700,
  letterSpacing: 0,
  lineHeight: 1,
  width: "100%",
  height: "3rem",
  paddingInline: "2rem",
  "@media": {
    [tbMedia]: {
      width: "auto",
    },
  },
});
