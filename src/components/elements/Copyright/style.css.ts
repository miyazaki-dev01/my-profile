import { style, styleVariants } from "@vanilla-extract/css";
import { colors } from "@/themes/colors";
import { breakpoints } from "@/themes/breakpoints";

const tbMedia = `screen and (min-width: ${breakpoints.tablet}px)`;

const copyrightBase = style({
  fontSize: "11px",
  fontWeight: 500,
  lineHeight: 1,
  letterSpacing: 0,
});

export const copyrightVariant = styleVariants({
  sideNav: [
    copyrightBase,
    {
      color: colors.black_40,
      marginTop: "2.5rem",
    },
  ],
  mobileFooter: [
    copyrightBase,
    {
      color: colors.black_40,
      marginTop: "0.625rem",
      "@media": {
        [tbMedia]: {
          marginTop: 0,
        },
      },
    },
  ],
  notFoundFooter: [
    copyrightBase,
    {
      color: colors.white_40,
    },
  ],
});
