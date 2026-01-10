import { style } from "@vanilla-extract/css";
import { breakpoints } from "@/themes/breakpoints";
import { colors } from "@/themes/colors";

const tbMedia = `screen and (min-width: ${breakpoints.tablet}px)`;

export const item = style({
  borderBottom: `1px solid ${colors.lightGray}`,
});

export const details = style({
  display: "block",
});

export const summary = style({
  display: "block",
  width: "100%",
  cursor: "pointer",
  listStyle: "none",
  selectors: {
    "&::-webkit-details-marker": { display: "none" },
    "&::marker": { content: "" },
  },
});

export const container = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1rem",
  paddingBlock: "1.5rem",
  paddingInline: 0,
  "@media": {
    [tbMedia]: {
      paddingInline: "1rem",
    },
  },
});

export const containerStatic = style([
  container,
  {
    cursor: "default",
  },
]);

export const left = style({
  display: "grid",
  gap: ".5rem",
});

export const title = style({
  fontFamily: "var(--font-roboto)",
  fontSize: "16px",
  letterSpacing: 0,
  lineHeight: 1.5,
  whiteSpace: "pre-line",
});

export const date = style({
  fontSize: "14px",
  fontWeight: 500,
  lineHeight: 1,
  letterSpacing: 0,
  color: colors.darkGray,
});

export const chevron = style({
  flexShrink: 0,
  transition: "transform 250ms ease",
  selectors: {
    [`${details}[open] &`]: {
      transform: "rotate(180deg)",
    },
  },
});

export const bodyOuter = style({
  display: "grid",
  gridTemplateRows: "0fr",
  overflow: "hidden",
  selectors: {
    [`${details}[open] &`]: {
      gridTemplateRows: "1fr",
    },
  },
});

export const body = style({
  fontFamily: "var(--font-roboto)",
  fontSize: "14px",
  letterSpacing: 0,
  lineHeight: 1.7,
  whiteSpace: "pre-line",
  minHeight: 0,
  paddingTop: ".5rem",
  paddingBottom: "2rem",
  paddingInline: 0,
  "@media": {
    [tbMedia]: {
      paddingInline: "1rem",
    },
  },
});
