import { style } from "@vanilla-extract/css";
import { colors } from "@/themes/colors";

export const container = style({
  display: "flex",
  alignItems: "center",
  border: `1px solid ${colors.red}`,
  backgroundColor: colors.inputBackgroundGray,
  borderRadius: ".5rem",
  paddingInline: "1rem",
  fontSize: "16px",
  color: colors.red,
  height: "3rem",
  marginBottom: "2rem",
});

export const link = style({
  fontSize: "14px",
  color: colors.black,
  marginLeft: "1.5rem",
  textDecoration: "underline",
});
