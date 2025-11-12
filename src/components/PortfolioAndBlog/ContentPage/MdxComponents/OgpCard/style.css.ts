import breakpoints from "@/theme/breakpoints";
import colors from "@/theme/colors";
import fontSizes from "@/theme/fontSize";
import fontWeight from "@/theme/fontWeight";
import space from "@/theme/space";
import { style } from "@vanilla-extract/css";

export const card = style({
  display: "block",
  border: `1px solid ${colors.darkWhite}`,
  borderRadius: "10px",
  boxShadow: `1px 1px 2px ${colors.darkGray}80`,
  transition: "box-shadow 0.2s ease",
  textDecoration: "none",
  paddingBlock: "8px",
  paddingInline: "10px",
  marginBlock: space.l,
  backgroundColor: colors.darkWhite,
  selectors: {
    "&:hover": {
      boxShadow: `3px 3px 3px ${colors.darkGray}80`,
    },
  },
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      paddingBlock: "12px",
      paddingInline: "18px",
    },
  },
});

export const content = style({
  display: "flex",
  gap: space.m,
  alignItems: "center",
});

export const textContainer = style({
  flex: 1,
});

export const title = style({
  lineBreak: "anywhere",
  fontSize: fontSizes.m,
  fontWeight: fontWeight.bold,
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontSize: "18px",
    },
  },
});

export const description = style({
  lineBreak: "anywhere",
  fontSize: fontSizes.xs,
  color: colors.darkGray,
  marginTop: space.xxs,
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontSize: fontSizes.s,
    },
  },
});

export const domain = style({
  fontSize: fontSizes.xs,
  color: colors.darkGray,
  marginTop: space.s,
});

export const imageWrapper = style({
  position: "relative",
  width: "90px",
  aspectRatio: "1 / 1",
  flexShrink: 0,
  borderRadius: "8px",
  overflow: "hidden",
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      width: "150px",
      aspectRatio: "8 / 5",
    },
  },
});

export const image = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});
