import { style } from "@vanilla-extract/css";

export const hiddenLabel = style({
  opacity: 0,
});

export const spinner = style({
  position: "absolute",
  inset: 0,
  margin: "auto",
  width: "22px",
  height: "22px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});
