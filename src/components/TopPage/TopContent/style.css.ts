import { style } from "@vanilla-extract/css";
import breakpoints from "@/theme/breakpoints";
import space from "@/theme/space";
import colors from "@/theme/colors";
import fontSizes from "@/theme/fontSize";
import fontWeight from "@/theme/fontWeight";

export const TopContentStyle = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  alignItems: "stretch",
  gap: "normal",
  "@media": {
    [`screen and (min-width: ${breakpoints.tablet}px)`]: {
      gridTemplateColumns: "repeat(2, 1fr)",
      alignItems: "center",
      gap: space.xxxl,
    },
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      gap: space.s_8rem,
    },
  },
});

export const imageStyle = style({
  borderRadius: "5px",
  boxShadow: `5px 3px 5px ${colors.lightGray}`,
});

export const descriptionStyle = style({
  "@media": {
    [`screen and (max-width: ${breakpoints.mobile}px)`]: {
      marginTop: space.xl,
    },
  },
});

export const occupationStyle = style({
  color: colors.darkGray,
  fontSize: fontSizes.m,
  "@media": {
    [`screen and (max-width: ${breakpoints.mobile}px)`]: {
      fontSize: fontSizes.xs,
    },
  },
});

export const nameStyle = style({
  fontWeight: fontWeight.bold_x,
  fontSize: fontSizes.xxl,
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontSize: fontSizes.xxxl,
    },
    [`screen and (max-width: ${breakpoints.mobile}px)`]: {
      fontWeight: fontWeight.bold,
      fontSize: fontSizes.xl,
    },
  },
});

export const explanatoryStyle = style({
  marginTop: space.m,
  display: "grid",
  gap: space.s,
  fontSize: fontSizes.s,
  lineHeight: "1.25",
  "@media": {
    [`screen and (max-width: ${breakpoints.mobile}px)`]: {
      fontSize: fontSizes.xs,
      gap: "0px",
      lineHeight: "1.1",
    },
  },
});

export const linkStyle = style({
  display: "flex",
  gap: space.l,
  alignItems: "center",
  marginTop: space.l,
  "@media": {
    [`screen and (max-width: ${breakpoints.mobile}px)`]: {
      marginTop: space.m,
      gap: space.m,
    },
  },
});

export const mail_IconStyle = style({
  width: fontSizes.l,
  height: fontSizes.l,
  transition: "transform 0.2s ease",
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      width: fontSizes.xl,
      height: fontSizes.xl,
      ":hover": {
        transform: "scale(1.3)",
      },
    },
  },
});

export const mailStyle = style({
  marginLeft: space.m,
  "@media": {
    [`screen and (max-width: ${breakpoints.mobile}px)`]: {
      marginLeft: space.s,
    },
  },
});
