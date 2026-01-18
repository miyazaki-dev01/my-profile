import { style } from "@vanilla-extract/css";
import { colors } from "@/themes/colors";

export const imageContainer = style({
  marginTop: "1.75rem",
  cursor: "pointer",
});

export const imageWrapper = style({
  overflow: "hidden",
  maxWidth: "100%",
  textAlign: "left",
});

export const image = style({
  objectFit: "contain",
  borderRadius: ".25rem",
  width: "auto",
  border: `1px solid ${colors.black_04}`,
});
