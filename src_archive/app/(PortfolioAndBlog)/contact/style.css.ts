import { style } from "@vanilla-extract/css";
import space from "@/theme/space";
import fontSizes from "@/theme/fontSize";
import fontWeight from "@/theme/fontWeight";
import colors from "@/theme/colors";
import breakpoints from "@/theme/breakpoints";

export const contactStyle = style({
  marginTop: space.xl,
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      width: "70%",
      marginRight: "auto",
      marginLeft: "auto",
    },
  },
});

export const thanksStyle = style({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  paddingTop: space.l,
  gap: space.s,
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      paddingTop: space.xxxl,
      gap: space.m,
    },
  },
});

export const thanksTitleStyle = style({
  fontSize: fontSizes.xl,
  fontWeight: fontWeight.bold,
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontSize: fontSizes.xxl,
    },
  },
});

export const thanksTextStyle = style({
  fontSize: fontSizes.s,
});

export const errorStyle = style({
  whiteSpace: "pre-line",
  color: "red",
  fontSize: fontSizes.xs,
  marginBottom: space.s,
  lineHeight: 1.2,
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontSize: fontSizes.s,
      marginBottom: space.m,
    },
  },
});

export const formStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: space.xml,
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      gap: space.xxxl,
    },
  },
});

export const formContentStyle = style({
  display: "flex",
  flexDirection: "column",
});

export const fromLavelStyle = style({
  fontSize: fontSizes.m,
  fontWeight: fontWeight.bold,
  marginBottom: space.xs,
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontSize: fontSizes.ml,
      marginBottom: space.s,
    },
  },
});

export const formInputStyle = style({
  width: "65%",
  paddingInline: space.xs,
  paddingBlock: space.xxs,
  border: `.5px solid ${colors.lightGray}`,
  borderRadius: "3px",
  transition: "border-color 0.2s",
  fontSize: fontSizes.s,
  ":focus": {
    outline: "none",
    borderColor: colors.darkGray,
    boxShadow: "0 0 0 0.8px rgba(8, 2, 1, 0.8)",
  },
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      maxWidth: "250px",
    },
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontSize: fontSizes.m,
      paddingInline: space.s,
      paddingBlock: "6px",
    },
  },
});

export const formTextareaStyle = style({
  padding: space.xs,
  border: `.5px solid ${colors.lightGray}`,
  borderRadius: "3px",
  transition: "border-color 0.2s",
  fontSize: fontSizes.xs,
  lineHeight: 1.3,
  ":focus": {
    outline: "none",
    borderColor: colors.darkGray,
    boxShadow: "0 0 0 0.8px rgba(8, 2, 1, 0.8)",
  },
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontSize: fontSizes.s,
      padding: space.s,
    },
  },
});

export const submitStyle = style({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  marginTop: space.m,
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      marginTop: space.l,
    },
  },
});

export const submitButtonStyle = style({
  paddingInline: space.s,
  paddingBlock: space.xs,
  display: "inline-flex",
  alignItems: "center",
  fontSize: fontSizes.m,
  fontWeight: fontWeight.bold,
  borderRadius: "4px",
  backgroundColor: colors.brack,
  color: colors.darkWhite,
  cursor: "pointer",
  ":focus": {
    outline: "none",
  },
  ":disabled": {
    opacity: 0.5,
    pointerEvents: "none",
  },
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontSize: "18px",
    },
  },
});
