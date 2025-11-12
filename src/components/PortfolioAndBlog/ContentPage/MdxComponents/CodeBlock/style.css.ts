import breakpoints from "@/theme/breakpoints";
import colors from "@/theme/colors";
import fontSizes from "@/theme/fontSize";
import space from "@/theme/space";
import { style, globalStyle } from "@vanilla-extract/css";

export const wrapper = style({
  position: "relative",
  overflow: "hidden",
  borderRadius: "6px",
  marginBlock: space.l,
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      borderRadius: "8px",
    },
  },
});

export const captionContent = style({
  position: "absolute",
  top: "0",
  left: "0",
  zIndex: 20,
  paddingBlock: "3px",
  paddingInline: space.s,
  background: `color-mix(in srgb, ${colors.darkWhite} 80%, transparent)`,
  borderBottomRightRadius: "3px",
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      paddingBlock: space.xxs,
      paddingInline: space.m,
      borderBottomRightRadius: "4px",
    },
  },
});

export const filename = style({
  fontFamily: "Montserrat, sans-serif",
  fontSize: fontSizes.xs,
  color: colors.brack,
  fontWeight: "bold",
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontSize: fontSizes.s,
    },
  },
});

export const preWrapper = style({
  overflowX: "auto",
  overflowY: "hidden",
  whiteSpace: "pre",
  WebkitOverflowScrolling: "touch",
  scrollbarWidth: "thin",
  scrollbarColor: `${colors.darkWhite} ${colors.brack}`,
  fontSize: fontSizes.s,
  backgroundColor: "var(--shiki-color-background, #21252B)",
  zIndex: 10,
  selectors: {
    "&::-webkit-scrollbar": {
      height: "6px",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "3px",
    },
  },
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontSize: fontSizes.m,
    },
  },
});

globalStyle("pre", {
  width: "100%",
  minWidth: "max-content",
  paddingBlock: space.s,
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      paddingBlock: space.m,
    },
  },
});

globalStyle("figure > figcaption + div pre", {
  paddingTop: space.xl,
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      paddingTop: space.xxl,
    },
  },
});

/* 共通: すべての data-line 行 */
globalStyle("figure > div > pre > code > span[data-line]", {
  position: "relative",
  paddingRight: space.s,
  paddingLeft: "18px",
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      paddingRight: space.m,
      paddingLeft: space.l,
    },
  },
});

globalStyle("figure > div > pre > code > span[data-line]::before", {
  position: "absolute",
  content: '""',
  left: 0,
  paddingLeft: "6px",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      paddingLeft: "10px",
    },
  },
});

/* 追加行 (+) */
globalStyle("figure > div > pre > code > span[data-line].diff.add", {
  background: "#00921b33",
});
globalStyle("figure > div > pre > code > span[data-line].diff.add::before", {
  content: "'+'",
  color: "#b4ff9b",
});

/* 削除行 (-) */
globalStyle("figure > div > pre > code > span[data-line].diff.remove", {
  background: "#da363233",
});
globalStyle("figure > div > pre > code > span[data-line].diff.remove::before", {
  content: "'-'",
  color: "#ff8fa3",
});

/* ハイライト行 */
globalStyle("figure > div > pre > code > span[data-line].highlighted", {
  background: "#fffb5d33",
  borderLeftWidth: "3px",
  borderColor: "#fffb5d",
  paddingLeft: "21px",
});

export const copyWrapper = style({
  position: "absolute",
  display: "flex",
  alignItems: "center",
  top: "10px",
  right: "10px",
  padding: space.xxs,
  marginRight: space.xs,
  zIndex: 30,
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      top: "12px",
      right: "12px",
    },
  },
});

export const copyBtn = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "transparent",
  color: colors.paleWhite,
  border: "none",
  cursor: "pointer",
});

export const copyIconStyle = style({
  fontSize: fontSizes.m,
  ":hover": { opacity: 0.7 },
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontSize: fontSizes.ml,
    },
  },
});

export const checkIconStyle = style({
  fontSize: fontSizes.m,
  color: "lightgreen",
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontSize: fontSizes.ml,
    },
  },
});
