import { style } from "@vanilla-extract/css";
import space from "@/theme/space";
import breakpoints from "@/theme/breakpoints";
import colors from "@/theme/colors";
import fontSizes from "@/theme/fontSize";
import fontWeight from "@/theme/fontWeight";

export const blogsStyle = style({
  marginTop: space.xl,
  maxWidth: "900px",
  marginRight: "auto",
  marginLeft: "auto",
});

export const blogStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBlock: "18px",
  borderBlockEnd: `.5px solid ${colors.lightGray}`,
  ":first-child": {
    borderTop: `.5px solid ${colors.lightGray}`,
  },
  "@media": {
    [`screen and (min-width: ${breakpoints.tablet}px)`]: {
      paddingInline: space.xml,
      paddingBlock: space.ml,
    },
  },
});

export const categoryStyle = style({
  fontSize: fontSizes.xs,
  backgroundColor: colors.darkWhite,
  border: `.5px solid ${colors.lightGray}`,
  paddingInline: space.xs,
  paddingBlock: "3px",
  borderRadius: "9999px",
});

export const blogTitleStyle = style({
  fontSize: fontSizes.m,
  fontWeight: fontWeight.bold,
  marginTop: space.s,
  lineHeight: 1.3,
  overflow: "hidden",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  "@media": {
    [`screen and (min-width: ${breakpoints.tablet}px)`]: {
      fontSize: "18px",
      selectors: {
        [`${blogStyle}:hover &`]: {
          color: colors.darkGray,
        },
      },
    },
  },
});

export const blogDateStyel = style({
  fontSize: fontSizes.xs,
  color: colors.darkGray,
  marginTop: space.xs,
  lineHeight: 1,
  "@media": {
    [`screen and (min-width: ${breakpoints.tablet}px)`]: {
      fontSize: fontSizes.s,
    },
  },
});

export const blogImageDivStyle = style({
  width: "5rem",
  height: "4rem",
  borderRadius: "1.5px",
  flexShrink: 0,
  overflow: "hidden",
  marginLeft: space.xs,
  "@media": {
    [`screen and (min-width: ${breakpoints.tablet}px)`]: {
      marginLeft: space.l,
      height: "4.5rem",
      width: "6rem",
    },
  },
});

export const blogImageStyle = style({
  objectFit: "cover",
  width: "100%",
  height: "100%",
  "@media": {
    [`screen and (min-width: ${breakpoints.tablet}px)`]: {
      transition: "transform 0.4s ease",
      selectors: {
        [`${blogStyle}:hover &`]: {
          transform: "scale(1.15)",
        },
      },
    },
  },
});
