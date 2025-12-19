import { style } from "@vanilla-extract/css";
import { breakpoints } from "@/themes/breakpoints";
import { colors } from "@/themes/colors";

const tbMedia = `screen and (min-width: ${breakpoints.tablet}px)`;

export const root = style({
  marginInline: "auto",
  marginTop: "1rem",
  width: "100%",
  maxWidth: "1052px",
  "@media": {
    [tbMedia]: {
      marginTop: 0,
    },
  },
});

export const layout = style({
  marginTop: "2rem",
  width: "100%",
  "@media": {
    [tbMedia]: {
      display: "flex",
      marginTop: "3rem",
    },
  },
});

export const imageColumn = style({
  marginInline: "-1.5rem",
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
      top: "4rem",
    },
  },
});

export const profileImage = style({
  objectFit: "contain",
});

export const contentColumn = style({
  width: "100%",
  marginTop: "2rem",
  "@media": {
    [tbMedia]: {
      flex: 1,
      marginTop: 0,
      marginLeft: "5rem",
    },
  },
});

export const content = style({
  display: "flex",
  flexDirection: "column",
  paddingBottom: "2rem",
  borderBottom: `0.5px solid ${colors.lightGray}`,
  gap: "3rem",
  "@media": {
    [tbMedia]: {
      paddingBottom: "2.5rem",
    },
  },
});

export const jobCategory = style({
  color: colors.darkGray,
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: 1,
  letterSpacing: 0,
});

export const contentBlock = style({
  display: "flex",
  flexDirection: "column",
  gap: ".75rem",
});

export const nameEn = style({
  fontSize: "28px",
  fontWeight: 600,
  lineHeight: 1,
  letterSpacing: ".025em",
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
  gap: "1rem",
  whiteSpace: "pre-line",
  fontFamily: "var(--font-roboto)",
  fontSize: "15px",
  letterSpacing: 0,
  lineHeight: 1.5,
});

export const externalLinkContainer = style({
  marginTop: "2rem",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "1.125rem",
  "@media": {
    [tbMedia]: {
      marginTop: "2.5rem",
    },
  },
});
