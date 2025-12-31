import { style } from "@vanilla-extract/css";
import { breakpoints } from "@/themes/breakpoints";
import { colors } from "@/themes/colors";

const pcMedia = `screen and (min-width: ${breakpoints.desktop}px)`;

export const blogCardStyle = style({
  display: "flex",
  paddingBlock: "1.5rem",
  paddingInline: 0,
  borderBlockEnd: `.5px solid ${colors.lightGray}`,
  ":first-child": {
    borderTop: `.5px solid ${colors.lightGray}`,
  },
  "@media": {
    [pcMedia]: {
      paddingInline: "1.5rem",
    },
  },
});

export const textContainerStyle = style({
  flexGrow: 1,
});

export const titleStyle = style({
  fontFamily: "var(--font-roboto)",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  overflowWrap: "break-word",
  WebkitLineClamp: 2,
  fontSize: "16px",
  fontWeight: 400,
  letterSpacing: 0,
  lineHeight: 1.5,
});

export const publishedAtStyle = style({
  marginTop: "0.5rem",
  color: colors.darkGray,
  fontSize: "15px",
  fontWeight: 500,
  lineHeight: 1,
  letterSpacing: 0,
});

export const imageContainerStyle = style({
  position: "relative",
  flexShrink: 0,
  overflow: "hidden",
  border: `1px solid ${colors.skeletonGray}`,
  borderRadius: ".25rem",
  width: "85px",
  height: "64px",
  marginLeft: "1rem",
});

export const imageStyle = style({
  objectFit: "cover",
  width: "100%",
  height: "100%",
  pointerEvents: "none",
});
