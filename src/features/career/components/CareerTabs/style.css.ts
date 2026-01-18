import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { breakpoints } from "@/themes/breakpoints";
import { colors } from "@/themes/colors";

const tbMedia = `screen and (min-width: ${breakpoints.tablet}px)`;
const pcMedia = `screen and (min-width: ${breakpoints.desktop}px)`;

export const tabsWrap = style({
  position: "relative",
});

export const leftFade = style({
  position: "absolute",
  top: 0,
  left: 0,
  height: "100%",
  width: "1.5rem",
  zIndex: 1,
  pointerEvents: "none",
  backgroundImage: `linear-gradient(to left, ${colors.white_00}, ${colors.white})`,
});

export const rightFade = style({
  position: "absolute",
  top: 0,
  right: 0,
  height: "100%",
  width: "2.5rem",
  zIndex: 1,
  pointerEvents: "none",
  backgroundImage: `linear-gradient(to right, ${colors.white_00}, ${colors.white})`,
});

export const tabList = style({
  display: "flex",
  overflowX: "auto",
  borderBottom: `1px solid ${colors.black_10}`,
  scrollbarWidth: "none",
  "@media": {
    [pcMedia]: {
      marginTop: "2.5rem",
    },
  },
});

export const tabItem = style({
  flexShrink: 0,
  textAlign: "center",
  ":first-child": {
    paddingLeft: "1.5rem",
  },
  ":last-child": {
    paddingRight: "1.5rem",
  },
  "@media": {
    [tbMedia]: {
      ":first-child": {
        paddingLeft: 0,
      },
      ":last-child": {
        paddingRight: 0,
      },
    },
  },
});

export const tabText = recipe({
  base: {
    fontFamily: "var(--font-roboto)",
    fontWeight: 300,
    fontSize: "16px",
    letterSpacing: 0,
    lineHeight: 1,
    padding: ".75rem",
  },
  variants: {
    active: {
      true: { fontWeight: 700, borderBottom: `2px solid ${colors.black}` },
      false: { fontWeight: 400 },
    },
  },
});
