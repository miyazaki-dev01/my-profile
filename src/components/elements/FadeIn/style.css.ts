import { style } from "@vanilla-extract/css";

const base = style({
  transition: "opacity 0.6s ease-in-out",
});

export const visible = style([
  base,
  {
    opacity: 1,
  },
]);

export const hidden = style([
  base,
  {
    opacity: 0,
  },
]);
