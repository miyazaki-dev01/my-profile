import { style } from "@vanilla-extract/css";
import breakpoints from "@/theme/breakpoints";
import colors from "@/theme/colors";
import fontSizes from "@/theme/fontSize";
import fontWeight from "@/theme/fontWeight";
import space from "@/theme/space";

export const contactButtonStyle = style({
  padding: "10px 18px",
  display: "inline-flex",
  alignItems: "center",
  fontSize: fontSizes.m,
  fontWeight: fontWeight.bold,
  borderRadius: "4px",
  border: `1px solid ${colors.brack}`,
  backgroundColor: colors.brack,
  color: colors.darkWhite,
  transition:
    "background-color 0.3s ease, color 0.3s ease, transform 0.2s ease",
  boxShadow: `4px 4px 0px ${colors.lightGray}`,
  selectors: {
    "&:hover": {
      backgroundColor: colors.paleWhite,
      color: colors.brack,
    },
    "&:focus": {
      outline: "none",
      backgroundColor: colors.paleWhite,
      color: colors.brack,
    },
    "&:disabled": {
      opacity: 0.5,
      pointerEvents: "none",
    },
    "&:active": {
      transform: "translate(3px, 3px)",
      boxShadow: `2px 2px 0px ${colors.lightGray}`,
    },
  },
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      fontSize: fontSizes.ml,
      padding: "12px 20px",
    },
  },
});

export const OverlayStyle = style({
  width: "100%",
  height: "100%",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 80,
  overflowX: "hidden",
  overflowY: "auto",
  pointerEvents: "none",
  backgroundColor: "rgba(189, 187, 177, 0.5)",
});

export const modalStyle = style({
  marginTop: 0,
  opacity: 0,
  transition: "all 400ms ease-out",
  margin: space.m,
  minHeight: "calc(100% - 3.5rem)",
  display: "flex",
  alignItems: "center",
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      maxWidth: "32rem",
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
});

export const modalContentStyle = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: colors.paleWhite,
  boxShadow: `6px 8px 5px 0 ${colors.darkGray}`,
  borderRadius: "5px",
  pointerEvents: "auto",
});

export const modalMenueStyle = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: `${space.s}px ${space.m}px`,
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      padding: `${space.m}px ${space.l}px`,
    },
  },
});

export const modalTitleStyle = style({
  fontWeight: fontWeight.bold,
  fontSize: fontSizes.ml,
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      fontSize: fontSizes.l,
    },
  },
});

export const closeButtonStyle = style({
  width: "32px",
  height: "32px",
  display: "inline-flex",
  justifyContent: "end",
  alignItems: "center",
  color: colors.brack,
  selectors: {
    "&:hover": {
      color: colors.darkGray,
    },
    "&:focus": {
      outline: "none",
    },
    "&:disabled": {
      opacity: 0.5,
      pointerEvents: "none",
    },
  },
});

export const closeIconStyle = style({
  flexShrink: 0,
  width: "20px",
  height: "20px",
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      width: "24px",
      height: "24px",
    },
  },
});

export const errorStyle = style({
  textAlign: "center",
  whiteSpace: "pre-line",
  color: "red",
  fontSize: fontSizes.xxs,
  lineHeight: "12px",
  "@media": {
    [`screen and (min-width: ${breakpoints.tablet}px)`]: {
      fontSize: fontSizes.xs,
      lineHeight: "14px",
    },
  },
});

export const formStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: space.m,
  marginTop: space.xs,
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      marginTop: space.ml,
      gap: space.ml,
    },
  },
});

export const formContentTitleStyle = style({
  display: "block",
  fontSize: fontSizes.s,
  fontWeight: fontWeight.bold,
  textAlign: "center",
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      fontSize: "18px",
    },
  },
});

export const formInputStyle = style({
  display: "block",
  width: "85%",
  padding: space.xs,
  border: `1px solid ${colors.lightGray}`,
  borderRadius: "3px",
  transition: "border-color 0.2s",
  margin: `${space.xxs}px auto 0 auto`,
  fontSize: fontSizes.s,
  ":focus": {
    outline: "none",
    borderColor: colors.darkGray,
    boxShadow: "0 0 0 0.8px rgba(8, 2, 1, 0.8)",
  },
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      fontSize: fontSizes.m,
    },
  },
});

export const submitStyle = style({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  padding: "8px 16px 12px 16px",
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      padding: "14px 18px 18px 18px",
    },
  },
});

export const submitButtonStyle = style({
  padding: "8px 12px",
  display: "inline-flex",
  alignItems: "center",
  fontSize: fontSizes.s,
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
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      fontSize: fontSizes.m,
      padding: "8px 14px",
    },
  },
});

export const thanksStyle = style({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  padding: "30px",
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      padding: "40px",
    },
  },
});

export const thanksTitleStyle = style({
  fontSize: fontSizes.xl,
  fontWeight: fontWeight.bold,
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      fontSize: fontSizes.xxl,
    },
  },
});

export const thanksTextStyle = style({
  fontSize: fontSizes.xs,
});

export const thanksCloseStyle = style({
  width: "fit-content",
  margin: "25px auto 0 auto",
  backgroundColor: colors.brack,
  color: colors.darkWhite,
  padding: "8px 10px",
  borderRadius: "3px",
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      margin: "35px auto 0 auto",
    },
  },
});

export const thanksCloseButtonStyle = style({
  fontSize: fontSizes.s,
  fontWeight: fontWeight.bold,
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      fontSize: fontSizes.m,
    },
  },
});
