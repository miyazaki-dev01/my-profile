import { style } from "@vanilla-extract/css";
import colors from "@/theme/colors";
import fontSizes from "@/theme/fontSize";
import space from "@/theme/space";
import breakpoints from "@/theme/breakpoints";

export const FooterStyle = style({
  backgroundColor: colors.brack,
  color: colors.darkWhite,
  textAlign: "center",
});

export const FooterTextStyle = style({
  fontSize: fontSizes.xxs,
  paddingTop: space.s,
  paddingBottom: space.s,
  "@media": {
    [`screen and (min-width: ${breakpoints.tablet}px)`]: {
      fontSize: fontSizes.s,
      paddingTop: "14px",
      paddingBottom: "14px",
    },
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      paddingTop: space.m,
      paddingBottom: space.m,
    },
  },
});
