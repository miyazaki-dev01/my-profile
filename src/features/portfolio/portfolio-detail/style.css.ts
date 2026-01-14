import { style } from "@vanilla-extract/css";
import { breakpoints } from "@/themes/breakpoints";
import { colors } from "@/themes/colors";

const tbMedia = `screen and (min-width: ${breakpoints.tablet}px)`;

export const root = style({
  maxWidth: "1052px",
  marginInline: "auto",
});

export const mainImageWrapper = style({
  width: "100vw",
  height: "375px",
  marginInline: "-1.5rem",
  "@media": {
    [tbMedia]: {
      width: "100%",
      height: "auto",
      marginInline: 0,
    },
  },
});

export const mainImage = style({
  objectFit: "cover",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  "@media": {
    [tbMedia]: {
      borderRadius: ".25rem",
    },
  },
});

export const body = style({
  maxWidth: "700px",
  marginInline: "auto",
});

export const title = style({
  fontFamily: "var(--font-roboto)",
  display: "flex",
  justifyContent: "center",
  position: "relative",
  fontSize: "21px",
  fontWeight: 700,
  letterSpacing: ".025em",
  marginTop: "2rem",
  lineHeight: 1.6,
  "@media": {
    [tbMedia]: {
      fontSize: "28px",
      lineHeight: 1.4,
      marginTop: "3rem",
    },
  },
});

export const titleDivider = style({
  width: "100%",
  height: "1px",
  background: colors.black_10,
  transform: "scaleY(0.5)",
  transformOrigin: "top",
  marginBlock: "1rem",
  "@media": {
    [tbMedia]: {
      marginBlock: "1.5rem",
    },
  },
});

export const description = style({
  fontFamily: "var(--font-roboto)",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: 1.5,
  letterSpacing: 0,
  textAlign: "center",
  whiteSpace: "pre-wrap",
});

export const siteLinkButton = style({
  display: "flex",
  justifyContent: "center",
  marginTop: "2.5rem",
});

export const externalLinkButton = style({
  fontFamily: "var(--font-roboto)",
  fontWeight: 700,
  paddingInline: "2rem",
  height: "2.8rem",
  fontSize: "18px",
  letterSpacing: 0,
  lineHeight: 1,
});
