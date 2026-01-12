import { style } from "@vanilla-extract/css";
import { colors } from "@/themes/colors";

export const label = style({
  fontFamily: "var(--font-roboto)",
  fontSize: "12px",
  lineHeight: 1,
  letterSpacing: 0,
  color: colors.darkGray,
});

export const value = style({
  fontFamily: "var(--font-roboto)",
  fontSize: "16px",
  lineHeight: 1.7,
  letterSpacing: 0,
  marginTop: ".125rem",
});
