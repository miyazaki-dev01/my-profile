import { style } from "@vanilla-extract/css";
import breakpoints from "@/theme/breakpoints";
import colors from "@/theme/colors";
import space from "@/theme/space";
import fontSizes from "@/theme/fontSize";

export const SnsShareContentStyle = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const ShareTextStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  gap: space.m,
  fontSize: fontSizes.l,
  selectors: {
    "&::before, &::after": {
      content: '""',
      flexGrow: 1,
      height: ".5px",
      backgroundColor: colors.brack,
    },
  },
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontSize: fontSizes.xl,
      gap: space.ml,
    },
  },
});

export const ShareIconsStyle = style({
  display: "flex",
  marginTop: space.xl,
  gap: space.xml,
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      marginTop: space.xxl,
      gap: space.xxl,
    },
  },
});

export const shareIconStyle = style({
  width: "36px",
  height: "36px",
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      width: "40px",
      height: "40px",
    },
  },
});
