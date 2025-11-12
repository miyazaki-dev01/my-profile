import { style, styleVariants } from "@vanilla-extract/css";
import colors from '@/theme/colors';
import breakpoints from "@/theme/breakpoints";

export const THEME_COLOR = {
  white: {
    backgroundColor: colors.paleWhite,
    color: colors.brack,
  },
  black: {
    backgroundColor: colors.brack,
    color: colors.darkWhite,
  },
} as const;

export const ProfileStyle = styleVariants(THEME_COLOR, (c) => ({
  ...c,
  padding: '5% 10% 5% 10%',
  scrollMarginTop: "50px",
  "@media": {
    [`screen and (max-width: ${breakpoints.mobile}px)`]: {
      padding: '10% 8% 10% 8%',
    },
  },
}));

export const ProfileContentStyle = style({
  maxWidth: breakpoints.maxWith,
  margin: "0 auto",
})