import { style, globalStyle } from "@vanilla-extract/css";
import { colors } from "@/themes/colors";

export const wrapper = style({
  marginTop: "1.75rem",
});

export const fileLabel = style({
  position: "relative",
  paddingLeft: "22px",
  fontSize: "16px",
  fontWeight: 300,
  lineHeight: 1,
  lineBreak: "anywhere",

  selectors: {
    "&::before": {
      position: "absolute",
      content: '""',
      left: 0,
      top: "2.5px",
      width: "12px",
      height: "12px",
      borderRadius: "1px",
      background: colors.black,
    },
  },
});

export const preWrapper = style({
  position: "relative",
  overflow: "hidden",
  borderRadius: ".25rem",
  marginTop: "1rem",
});

globalStyle(`${preWrapper} pre`, {
  backgroundColor: `${colors.black} !important`,
  display: "block",
  width: "100%",
  overflowX: "auto",
  overflowY: "hidden",
  whiteSpace: "pre",
  WebkitOverflowScrolling: "touch",
  scrollbarWidth: "thin",
  scrollbarColor: `${colors.white} ${colors.black}`,
  fontSize: "12px",
  lineHeight: 1.6,
  paddingBlock: "0.8rem",
  margin: 0,
});

globalStyle(`${preWrapper} code`, {
  minWidth: "max-content",
});

globalStyle(`${preWrapper} code > span[data-line]`, {
  display: "block",
  position: "relative",
  paddingLeft: "20px",
  paddingRight: "1rem",
});

globalStyle(`${preWrapper} code > span[data-line]::before`, {
  content: '""',
  position: "absolute",
  left: 0,
  width: "20px",
  height: "100%",
  textAlign: "center",
});

globalStyle(`${preWrapper} code > span[data-line].diff.add`, {
  background: "#8bdf4c4d",
});
globalStyle(`${preWrapper} code > span[data-line].diff.add::before`, {
  content: "'+'",
  color: "#b4ff9b",
});

globalStyle(`${preWrapper} code > span[data-line].diff.remove`, {
  background: "#ff80954d",
});
globalStyle(`${preWrapper} code > span[data-line].diff.remove::before`, {
  content: "'-'",
  color: "#ff8fa3",
});

globalStyle(`${preWrapper} code > span[data-line].highlighted`, {
  background: "#fffb5d4d",
  boxShadow: "inset 3px 0 0 #fffb5d",
});

export const copyWrapper = style({
  position: "absolute",
  top: "14px",
  right: "14px",
  zIndex: 10,
});

export const copyBtn = style({
  padding: "1px 8px",
  background: colors.black,
  cursor: "pointer",
});

export const copyIconStyle = style({
  color: colors.white,
  fontSize: "18px",
});

export const checkIconStyle = style({
  fontSize: "18px",
  color: "lightgreen",
});
