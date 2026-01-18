import { style } from "@vanilla-extract/css";
import { breakpoints } from "@/themes/breakpoints";
import { colors } from "@/themes/colors";

const tbMedia = `screen and (min-width: ${breakpoints.tablet}px)`;
const pcMedia = `screen and (min-width: ${breakpoints.desktop}px)`;

export const root = style({
  maxWidth: "1052px",
  marginInline: "auto",
  marginTop: "1rem",
  "@media": {
    [tbMedia]: {
      marginTop: 0,
    },
  },
});

export const body = style({
  maxWidth: "700px",
  marginInline: "auto",
});

export const title = style({
  fontFamily: "var(--font-roboto)",
  fontSize: "22px",
  fontWeight: 700,
  letterSpacing: ".025em",
  lineHeight: 1.6,
  "@media": {
    [tbMedia]: {
      fontSize: "28px",
      lineHeight: 1.4,
    },
  },
});

export const tagsList = style({
  display: "flex",
  flexWrap: "wrap",
  listStyle: "none",
  marginTop: "2rem",
  gap: "0.5rem",
});

export const tagsItem = style({
  fontFamily: "var(--font-roboto)",
  fontSize: "12px",
  fontWeight: 500,
  letterSpacing: ".05em",
  lineHeight: 1,
  color: colors.white,
  backgroundColor: colors.black,
  paddingInline: "12px",
  paddingBlock: "6px",
  borderRadius: "9999px",
});

export const metaRow = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "1.5rem",
});

export const dateContainer = style({
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",
});

export const dateItem = style({
  display: "flex",
  alignItems: "center",
  gap: "0.25rem",
  color: colors.black_30,
});

export const dateIcon = style({
  display: "block",
  height: "16px",
  width: "16px",
  transform: "translateY(1.2px)",
});

export const date = style({
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: 1,
  letterSpacing: 0,
});

export const line = style({
  width: "100%",
  height: "1px",
  background: colors.black_10,
  transform: "scaleY(0.5)",
  transformOrigin: "top",
  marginBlock: "6rem",
  "@media": {
    [pcMedia]: {
      marginBlock: "8rem",
    },
  },
});
