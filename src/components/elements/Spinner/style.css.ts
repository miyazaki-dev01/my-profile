import { style, keyframes } from "@vanilla-extract/css";
import { colors } from "@/theme/colors";

const rotate = keyframes({
  to: {
    transform: "rotate(360deg)",
  },
});

export const spinner = style({
  width: "32px",
  height: "32px",
  border: `2.6px solid ${colors.lightGray}`,
  borderRadius: "50%",
  position: "relative",
  selectors: {
    "&::after": {
      content: '""',
      position: "absolute",
      top: "-2.6px",
      bottom: "-2.6px",
      right: "-2.6px",
      left: "-2.6px",
      border: "2.6px solid transparent",
      borderTopColor: colors.black,
      borderRadius: "50%",
      animation: `${rotate} 1.2s linear infinite`,
    },
  },
});
