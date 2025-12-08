import { style } from "@vanilla-extract/css";
import { breakpoints } from "@/themes/breakpoints";
import { colors } from "@/themes/colors";

const tbMedia = `screen and (min-width: ${breakpoints.tablet}px)`;

export const root = style({
  marginInline: "auto",
  marginTop: "16px",
  width: "100%",
  maxWidth: "1052px",
  "@media": {
    [tbMedia]: {
      marginTop: 0,
    },
  },
});

export const layout = style({
  marginTop: "32px",
  width: "100%",
  "@media": {
    [tbMedia]: {
      display: "flex",
      marginTop: "48px",
    },
  },
});

export const imageColumn = style({
  marginInline: "-24px",
  width: "100vw",
  "@media": {
    [tbMedia]: {
      flex: 1,
      marginInline: 0,
      width: "100%",
    },
  },
});

export const imageWrapper = style({
  position: "relative",
  aspectRatio: "1 / 1",
  "@media": {
    [tbMedia]: {
      position: "sticky",
      top: "64px",
    },
  },
});

export const contentColumn = style({
  width: "100%",
  marginTop: "32px",
  "@media": {
    [tbMedia]: {
      flex: 1,
      marginTop: "0px",
      marginLeft: "80px",
    },
  },
});

export const content = style({
  display: "flex",
  flexDirection: "column",
  paddingBottom: "32px",
  borderBottom: `0.5px solid ${colors.lightGray}`,
  gap: "32px",
  "@media": {
    [tbMedia]: {
      paddingBottom: "48px",
    },
  },
});

export const jobCategory = style({
  color: colors.darkGray,
  fontSize: "15px",
  fontWeight: 500,
  lineHeight: 1,
  letterSpacing: 0,
});

export const contentBlock = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

export const nameEn = style({
  fontSize: "24px",
  fontWeight: 600,
  lineHeight: 1,
  letterSpacing: "0.6px",
});

export const nameJa = style({
  fontFamily: "var(--font-roboto)",
  color: colors.darkGray,
  fontSize: "14px",
  lineHeight: 1,
  letterSpacing: 0,
});

export const selfIntroduction = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  whiteSpace: "pre-line",
  fontFamily: "var(--font-roboto)",
  fontSize: "14px",
  letterSpacing: 0,
  lineHeight: 1.3,
});

export const externalLinkContainer = style({
  marginTop: "32px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "18px",
  "@media": {
    [tbMedia]: {
      paddingBottom: "48px",
    },
  },
});
