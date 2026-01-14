import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { breakpoints } from "@/themes/breakpoints";
import { colors } from "@/themes/colors";

const tbMedia = `screen and (min-width: ${breakpoints.tablet}px)`;

export const root = style({
  borderBottom: `0.5px solid ${colors.black_10}`,
  ":first-child": {
    borderTop: `.5px solid ${colors.black_10}`,
  },
  "@media": {
    [tbMedia]: {
      border: `.5px solid ${colors.black_10}`,
    },
  },
});

export const row = style({
  display: "flex",
  alignItems: "center",
  paddingBlock: "1.25rem",
  paddingInline: "1.25rem",
  gap: "1.8rem",
  "@media": {
    [tbMedia]: {
      paddingBlock: "1.5rem",
      paddingInline: "1.5rem",
    },
  },
});

export const iconWrap = style({
  position: "relative",
  width: "38px",
  aspectRatio: "1 / 1",
  flexShrink: 0,
});

export const iconImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
  pointerEvents: "none",
});

export const subIconWrap = style({
  position: "absolute",
  width: "18px",
  aspectRatio: "1 / 1",
  right: "-6px",
  bottom: "-6px",
});

export const subIconImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
  pointerEvents: "none",
});

export const body = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minWidth: 0,
  },
  variants: {
    hasLabel: {
      true: {
        gap: ".25rem",
      },
      false: {
        gap: 0,
      },
    },
  },
});

export const name = style({
  fontFamily: "var(--font-roboto)",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: 1,
  letterSpacing: 0,
  overflow: "hidden",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  overflowWrap: "break-word",
  WebkitLineClamp: 1,
});

export const label = style({
  fontSize: "13px",
  fontWeight: 600,
  lineHeight: 1,
  letterSpacing: 0,
  color: colors.black_20,
  overflow: "hidden",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  overflowWrap: "break-word",
  WebkitLineClamp: 1,
});
