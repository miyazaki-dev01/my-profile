import { style } from "@vanilla-extract/css";
import { colors } from "@/themes/colors";
import { breakpoints } from "@/themes/breakpoints";

const tbMedia = `screen and (min-width: ${breakpoints.tablet}px)`;

export const root = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  marginTop: "1rem",
  "@media": {
    [tbMedia]: {
      marginTop: 0,
    },
  },
});

export const container = style({
  "@media": {
    [tbMedia]: {
      width: "600px",
    },
  },
});

export const description = style({
  fontFamily: "var(--font-roboto)",
  fontSize: "14px",
  lineHeight: 1.7,
  letterSpacing: 0,
  marginTop: "1rem",
});

export const confirmListRoot = style({
  marginTop: "2rem",
  "@media": {
    [tbMedia]: {
      marginTop: "2.5rem",
    },
  },
});

export const confirmListWrap = style({
  borderRadius: ".5rem",
  border: `1px solid ${colors.black_10}`,
});

export const confirmListContainer = style({
  display: "flex",
  paddingBlock: "1.5rem",
  paddingInline: "1rem",
  "@media": {
    [tbMedia]: {
      paddingInline: "1.5rem",
    },
  },
});

export const confirmList = style({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const errorBase = style({
  fontFamily: "var(--font-roboto)",
  fontSize: "13px",
  lineHeight: "1rem",
  letterSpacing: 0,
  whiteSpace: "pre-line",
  marginBlock: ".5rem",
});

export const errer = style({
  color: colors.red,
});

export const none = style({
  height: "2rem",
});

export const buttonRow = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  "@media": {
    [tbMedia]: {
      flexDirection: "row-reverse",
      gap: "1rem",
    },
  },
});

export const submit = style({
  fontFamily: "var(--font-roboto)",
  fontSize: "16px",
  fontWeight: 700,
  letterSpacing: 0,
  lineHeight: 1,
  height: "3rem",
  paddingInline: "2rem",
});

export const edit = style({
  fontFamily: "var(--font-roboto)",
  fontSize: "16px",
  fontWeight: 700,
  letterSpacing: 0,
  lineHeight: 1,
  height: "3rem",
  paddingInline: "2rem",
});
