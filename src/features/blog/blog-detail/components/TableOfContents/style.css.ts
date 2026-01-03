import { style } from "@vanilla-extract/css";
import { colors } from "@/themes/colors";

export const toc = style({
  marginTop: "2rem",
  border: `.5px solid ${colors.black}`,
  borderRadius: ".3rem",
  background: colors.white,
  overflow: "hidden",
});

export const toggleButton = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  padding: "0.6rem 1rem",
  background: "transparent",
});

export const triangle = style({
  width: 0,
  height: 0,
  borderTop: "6px solid transparent",
  borderBottom: "6px solid transparent",
  borderLeft: `8px solid ${colors.black}`,
  transition: "transform 200ms ease",
  selectors: {
    [`${toc}[data-open="true"] &`]: {
      transform: "rotate(90deg)",
    },
  },
});

export const title = style({
  fontFamily: "var(--font-roboto)",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: 1,
  color: colors.black,
});

export const panel = style({
  overflow: "hidden",
  maxHeight: 0,
  transition: "max-height 220ms ease",
});

export const panelInner = style({
  padding: "0.8rem 1rem",
});

export const list = style({
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "grid",
  gap: "1rem",
});

export const itemH2 = style({});
export const itemH3 = style({
  paddingLeft: "1.2rem",
});

export const link = style({
  display: "block",
  color: colors.black,
  fontFamily: "var(--font-roboto)",
  textDecoration: "none",
  fontSize: "14px",
  lineHeight: 1.2,
  letterSpacing: 0,
});
