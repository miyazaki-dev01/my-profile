import { style } from "@vanilla-extract/css";
import { breakpoints } from "@/themes/breakpoints";

const tbMedia = `screen and (min-width: ${breakpoints.tablet}px)`;

export const root = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  height: "100%",
  marginTop: "1.5rem",
  marginInline: "auto",
  paddingInline: ".5rem",
  "@media": {
    [tbMedia]: {
      marginTop: 0,
      paddingInline: 0,
      width: "480px",
    },
  },
});

export const title = style({
  fontFamily: "var(--font-roboto)",
  fontSize: "21px",
  fontWeight: 700,
  letterSpacing: ".025em",
  lineHeight: 1,
  marginBottom: ".75rem",
  "@media": {
    [tbMedia]: {
      marginBottom: "1rem",
    },
  },
});

export const message1 = style({
  fontFamily: "var(--font-roboto)",
  fontSize: "16px",
  letterSpacing: 0,
  lineHeight: 1.7,
});

export const message2 = style({
  fontFamily: "var(--font-roboto)",
  fontSize: "16px",
  letterSpacing: 0,
  lineHeight: 1.7,
  marginBottom: "1.5rem",
  "@media": {
    [tbMedia]: {
      marginBottom: "2.5rem",
    },
  },
});

export const completeButton = style({
  fontFamily: "var(--font-roboto)",
  fontSize: "17px",
  fontWeight: 700,
  letterSpacing: 0,
  lineHeight: 1,
  paddingInline: "2rem",
  height: "3.5rem",
  "@media": {
    [tbMedia]: {
      height: "3rem",
    },
  },
});
