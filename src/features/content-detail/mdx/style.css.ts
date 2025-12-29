import { style, globalStyle } from "@vanilla-extract/css";
import { breakpoints } from "@/themes/breakpoints";
import { colors } from "@/themes/colors";

const tbMedia = `screen and (min-width: ${breakpoints.tablet}px)`;
const pcMedia = `screen and (min-width: ${breakpoints.desktop}px)`;

// ------------------------------
// ラッパー
// ------------------------------

export const mdxRoot = style({
  fontFamily: "var(--font-roboto)",
  fontWeight: 400,
});
globalStyle(`${mdxRoot} > :first-child:not(h2)`, {
  marginTop: "5rem",
});

// ------------------------------
// 見出し
// ------------------------------

export const h2 = style({
  fontWeight: 700,
  fontSize: "22px",
  marginTop: "6rem",
  lineHeight: 1.2,
  "@media": {
    [tbMedia]: {
      fontSize: "24px",
    },
  },
});

export const h3 = style({
  fontWeight: 700,
  fontSize: "18px",
  marginTop: "3rem",
  lineHeight: 1.2,
});

export const h4 = style({
  fontWeight: 700,
  fontSize: "16px",
  marginTop: "2rem",
  lineHeight: 1.2,
});

// ------------------------------
// テキスト要素
// ------------------------------

export const p = style({
  fontSize: "16px",
  letterSpacing: 0,
  lineHeight: 1.7,
  marginTop: "1.75rem",
});

export const strong = style({
  fontWeight: 700,
});

export const blockquote = style({
  borderLeft: `4px solid ${colors.lightGray}`,
  paddingLeft: "1rem",
  color: colors.darkGray,
});
globalStyle(`${blockquote} p`, {
  fontSize: "15px",
  lineHeight: 1.4,
  paddingBlock: "0.25rem",
});

export const a = style({
  color: colors.black,
  textDecoration: "underline",
  textUnderlineOffset: "1px",
  textDecorationThickness: "1.6px",
});

export const inlineCode = style({
  fontSize: "14px",
  backgroundColor: colors.lightGray,
  padding: ".15rem .3rem",
  borderRadius: "4px",
  marginInline: "2px",
});

// ------------------------------
// リスト
// ------------------------------

export const ul = style({
  listStyleType: "disc",
  listStylePosition: "outside",
  paddingLeft: "1.5rem",
  marginTop: "1.75rem",
});

export const ol = style({
  listStyle: "none",
  marginTop: "1.75rem",
  counterReset: "item",
});

export const li = style({
  lineHeight: 1.7,
});
globalStyle(`${li} > p`, {
  marginBlock: 0,
});

globalStyle(
  `${ul} > li > ${ul}, ${ul} > li > ${ol}, ${ol} > li > ${ul}, ${ol} > li > ${ol}`,
  { marginBlock: ".5rem" }
);
globalStyle(
  `${ul} > li > ${ul}:last-child, ${ul} > li > ${ol}:last-child, ${ol} > li > ${ul}:last-child, ${ol} > li > ${ol}:last-child`,
  { marginTop: ".5rem" }
);

// ul > ul
globalStyle(`${ul} > li > ${ul}`, {
  listStyleType: "circle",
});

// ol
globalStyle(`${ol} > li`, {
  counterIncrement: "item",
  position: "relative",
  paddingLeft: "1.8rem",
});
globalStyle(`${ol} > li::before`, {
  content: "counter(item) '. '",
  position: "absolute",
  left: 0,
  top: ".08rem",
  width: "1.35rem",
  textAlign: "right",
  lineHeight: "inherit",
  fontVariantNumeric: "tabular-nums",
});

// ol > ol
globalStyle(`${ol} > li > ${ol} > li`, {
  paddingLeft: "2.4rem",
});
globalStyle(`${ol} > li > ${ol} > li::before`, {
  content: "counters(item, '. ') ' '",
  width: "1.8rem",
});

// ------------------------------
// テーブル
// ------------------------------

export const table = style({
  marginTop: "1.75rem",
  borderCollapse: "collapse",
  maxWidth: "100%",
});

export const th = style({
  overflowWrap: "anywhere",
  backgroundColor: colors.lightGray,
  border: `1px solid ${colors.darkGray}`,
  paddingBlock: "0.4rem",
  paddingInline: "0.5rem",
  fontSize: "15px",
  fontWeight: 700,
  lineHeight: 1.5,
});

export const td = style({
  overflowWrap: "anywhere",
  border: `1px solid ${colors.darkGray}`,
  paddingBlock: "0.45rem",
  paddingInline: "0.5rem",
  fontSize: "15px",
  lineHeight: 1.5,
});
