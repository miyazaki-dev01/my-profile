import breakpoints from "@/theme/breakpoints";
import { style, keyframes } from "@vanilla-extract/css";

export const loaderPositionStyle = style({
  position: "fixed",
  left: "50%",
  top: "50vh",
  transform: "translateX(-50%)",
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      marginLeft: "8%",
    },
  },
});

const rotate = keyframes({
  to: {
    transform: "rotate(360deg)",
  },
});

export const ringLoader = style({
  width: "30px",
  height: "30px",
  border: "3px solid #bdbbb1",
  borderRadius: "50%",
  position: "relative",
  selectors: {
    "&::after": {
      content: "",
      position: "absolute",
      top: "-3px",
      bottom: "-3px",
      right: "-3px",
      left: "-3px",
      border: "3px solid transparent",
      borderTopColor: "#080201",
      borderRadius: "50%",
      animation: `${rotate} 1.5s linear infinite`,
    },
  },
});
