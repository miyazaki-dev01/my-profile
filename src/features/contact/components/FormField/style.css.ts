import { style } from "@vanilla-extract/css";
import { colors } from "@/themes/colors";

export const label = style({
  display: "block",
  fontFamily: "var(--font-roboto)",
  fontSize: "14px",
  lineHeight: 1.7,
  letterSpacing: 0,
  marginBottom: ".5rem",
});

export const inputBase = style({
  display: "flex",
  height: "3.5rem",
  alignItems: "center",
  borderRadius: ".5rem",
  backgroundColor: colors.black_04,
  paddingInline: "1rem",
  color: colors.black,
  selectors: {
    "&:focus-within": {
      boxShadow: `0 0 0 1px ${colors.black}`,
    },
  },
});

export const textarea = style({
  height: "auto",
  padding: "1rem",
});

export const input = style({
  position: "relative",
});

export const defaultInput = style({
  display: "flex",
  width: "100%",
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: "100%",
  fontFamily: "var(--font-roboto)",
  fontSize: "16px",
  lineHeight: 1.5,
  letterSpacing: 0,
  borderWidth: 0,
  backgroundColor: "transparent",
  backgroundImage: "none",
  outline: "2px solid transparent",
  outlineOffset: "2px",
  outlineColor: "transparent",
  selectors: {
    "&::placeholder": {
      color: colors.black_40,
    },
  },
});

export const inputTextarea = style({
  height: "10rem",
  resize: "none",
});

export const inputError = style({
  boxShadow: `0 0 0 1px ${colors.red}`,
});

export const textError = style({
  color: colors.red,
});

export const captionBase = style({
  fontFamily: "var(--font-roboto)",
  fontSize: "13px",
  lineHeight: "1.25rem",
  letterSpacing: 0,
  marginTop: ".5rem",
});

export const captionNone = style({
  height: "1.25rem",
});

export const captionDefault = style({
  color: colors.black_40,
});

export const error = style({
  color: colors.red,
});
