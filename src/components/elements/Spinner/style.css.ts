import {
  style,
  keyframes,
  styleVariants,
  createVar,
} from "@vanilla-extract/css";
import { colors } from "@/themes/colors";

const rotate = keyframes({
  to: {
    transform: "rotate(360deg)",
  },
});

const spinnerBorderColorVar = createVar();

export const spinner = style({
  border: `2.6px solid ${spinnerBorderColorVar}`,
  borderRadius: "50%",
  position: "relative",
  vars: {
    [spinnerBorderColorVar]: colors.lightGray,
  },
});

const spinnerAfterBase = {
  content: '""',
  position: "absolute" as const,
  top: "-2.6px",
  bottom: "-2.6px",
  right: "-2.6px",
  left: "-2.6px",
  border: "2.6px solid transparent",
  borderRadius: "50%",
  animation: `${rotate} 1.2s linear infinite`,
};

export const spinnerColor = styleVariants({
  black: {
    vars: {
      [spinnerBorderColorVar]: colors.lightGray,
    },
    selectors: {
      "&::after": {
        ...spinnerAfterBase,
        borderTopColor: colors.black,
      },
    },
  },
  white: {
    vars: {
      [spinnerBorderColorVar]: colors.darkModeWhite,
    },
    selectors: {
      "&::after": {
        ...spinnerAfterBase,
        borderTopColor: colors.white,
      },
    },
  },
});
