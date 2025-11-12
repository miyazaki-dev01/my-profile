import { style } from "@vanilla-extract/css";
import fontSizes from "@/theme/fontSize";
import fontWeight from "@/theme/fontWeight";
import space from "@/theme/space";
import colors from "@/theme/colors";
import breakpoints from "@/theme/breakpoints";

export const portfoliosStyle = style({
  display: "grid",
  gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
  gap: space.xxxl,
  marginTop: space.xxl,
  marginRight: "-1.5rem",
  marginLeft: "-1.5rem",
  maxWidth: "900px",
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      marginTop: space.xxl,
      marginRight: "auto",
      marginLeft: "auto",
    },
  },
});

export const portfolioStyle = style({
  width: "100%",
  marginLeft: "auto",
  marginRight: "auto",
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      width: "90%",
      transition: "transform 0.3s ease",
      selectors: {
        "&:hover": {
          transform: "scale(0.97)",
        },
      },
    },
  },
});

export const portfolioLinkStyle = style({
  overflow: "hidden",
  boxSizing: "border-box",
});

export const ImageDivStyle = style({
  overflow: "hidden",
  aspectRatio: "1.78261 / 1",
});

export const portfolioImageStyle = style({
  height: "100%",
  width: "100%",
  objectFit: "cover",
  borderRadius: 0,
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      borderRadius: ".3rem",
    },
  },
});

export const portfolioTextStyle = style({
  marginTop: space.s,
  marginLeft: "1.5rem",
  marginRight: "1.5rem",
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      marginLeft: space.m,
      marginTop: space.m,
      marginRight: space.xs,
    },
  },
});

export const portfolioTitleStyle = style({
  color: colors.brack,
  fontSize: "18px",
  fontWeight: fontWeight.bold,
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      fontSize: fontSizes.l,
    },
  },
});

export const portfolioDiscriptionStyle = style({
  color: colors.darkGray,
  fontSize: "13px",
  fontWeight: fontWeight.normal,
  marginTop: space.xxs,
  lineHeight: 1.3,
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      fontSize: fontSizes.m,
      marginTop: space.xs,
      lineHeight: "normal",
    },
  },
});
