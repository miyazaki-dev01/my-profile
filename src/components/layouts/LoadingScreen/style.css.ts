import { style } from "@vanilla-extract/css";

export const spinnerContainer = style({
  display: "flex",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
});

export const spinnerWrapper = style({
  width: "32px",
  height: "32px",
  overflow: "hidden",
  margin: "0 auto",
  outline: "none",
});
