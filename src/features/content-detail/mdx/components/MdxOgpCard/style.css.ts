import { style } from "@vanilla-extract/css";
import { breakpoints } from "@/themes/breakpoints";
import { colors } from "@/themes/colors";

const tbMedia = `screen and (min-width: ${breakpoints.tablet}px)`;

export const card = style({
  display: "block",
  textDecoration: "none",
  marginTop: "1.75rem",
  border: `1px solid ${colors.black_10}`,
  borderRadius: ".3rem",
  overflow: "hidden",
});

export const content = style({
  display: "flex",
  gap: "1rem",
  alignItems: "stretch",
});

export const textContainer = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  paddingBlock: "1rem",
  paddingLeft: "1rem",
});

export const title = style({
  overflow: "hidden",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  overflowWrap: "break-word",
  WebkitLineClamp: 1,
  fontSize: "16px",
  fontWeight: 700,
  lineHeight: 1.5,
  letterSpacing: 0,
  lineBreak: "anywhere",
});

export const description = style({
  overflow: "hidden",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  overflowWrap: "break-word",
  WebkitLineClamp: 1,
  fontSize: "12px",
  color: colors.black_40,
  lineHeight: 1,
  letterSpacing: 0,
  lineBreak: "anywhere",
  marginTop: "0.3rem",
});

export const meta = style({
  display: "inline-flex",
  alignSelf: "flex-end",
  alignItems: "center",
  gap: "0.3rem",
});

export const favicon = style({
  width: "14px",
  height: "14px",
  display: "block",
  objectFit: "cover",
  flex: "none",
});

export const domain = style({
  fontSize: "12px",
  lineHeight: 1,
  color: colors.black_40,
  letterSpacing: 0,
});

export const imageWrapper = style({
  flex: "none",
  width: "100px",
  aspectRatio: "1 / 1",
  overflow: "hidden",
  borderLeft: `1px solid ${colors.black_10}`,
  "@media": {
    [tbMedia]: {
      width: "200px",
      aspectRatio: "16 / 9",
    },
  },
});

export const image = style({
  width: "100%",
  height: "100%",
  display: "block",
  objectFit: "cover",
  pointerEvents: "none",
});
