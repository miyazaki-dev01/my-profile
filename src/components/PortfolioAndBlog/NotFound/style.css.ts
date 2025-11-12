import { style } from "@vanilla-extract/css";
import space from "@/theme/space";
import breakpoints from "@/theme/breakpoints";
import fontSizes from "@/theme/fontSize";
import fontWeight from "@/theme/fontWeight";
import colors from "@/theme/colors";

export const notFoundStyle = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: space.xxxl,
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      marginTop: "90px",
    },
  },
});

export const h1Style = style({
  fontSize: "40px",
  fontWeight: fontWeight.bold,
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontSize: "55px",
    },
  },
});

export const pStyle = style({
  marginTop: space.xs,
  fontSize: fontSizes.s,
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontSize: fontSizes.m,
      marginTop: space.s,
    },
  },
});

export const linksStyle = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "50px",
  gap: space.ml,
});

export const linkStyle = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  border: `0.3px solid ${colors.brack}`,
  borderRadius: "8px",
  fontSize: fontSizes.s,
  height: "32px",
  paddingInline: space.m,
  backgroundColor: colors.paleWhite,
  color: colors.brack,
  transition: "background-color 0.3s ease, color 0.3s ease",
  ":hover": {
    backgroundColor: colors.brack,
    color: colors.paleWhite,
    cursor: "pointer",
  },
});
