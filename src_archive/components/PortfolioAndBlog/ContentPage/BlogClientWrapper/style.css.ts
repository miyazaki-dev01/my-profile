import { style } from "@vanilla-extract/css";
import breakpoints from "@/theme/breakpoints";
import fontSizes from "@/theme/fontSize";
import fontWeight from "@/theme/fontWeight";
import colors from "@/theme/colors";
import space from "@/theme/space";

export const contentDivStyle = style({
  maxWidth: "1000px",
  marginInline: "auto",
});

export const ContentMarginStyle = style({
  marginInline: "0px",
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      marginInline: "20px",
    },
  },
});

export const wrapper = style({
  marginTop: "10px",
  marginBottom: "-30px",
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      marginTop: "50px",
      marginBottom: "-10px",
      marginInline: "5%",
    },
  },
});

export const titleStyle = style({
  fontSize: fontSizes.xl,
  fontWeight: fontWeight.bold,
  lineHeight: 1.2,
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontSize: fontSizes.xxml,
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
  marginTop: space.l,
  width: "fit-content",
});

export const daysStyle = style({
  display: "flex",
  gap: space.m,
  marginTop: space.m,
  fontSize: fontSizes.s,
  color: colors.darkGray,
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontSize: fontSizes.m,
    },
  },
});

export const dateStyle = style({
  display: "flex",
  alignItems: "center",
  gap: space.xxs,
});

export const publishedIcon = style({
  height: "16px",
  width: "16px",
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      height: "18px",
      width: "18px",
    },
  },
});

export const updateIcon = style({
  height: "12px",
  width: "12px",
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      height: "14px",
      width: "14px",
    },
  },
});
