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
      color: colors.darkGray,
      marginTop: "40px",
    },
  ],
  mobileFooter: [
    copyrightBase,
    {
      color: colors.darkGray,
      marginTop: "10px",
      "@media": {
        [tbMedia]: {
          marginTop: "0px",
        },
      },
    },
  ],
  notFoundFooter: [
    copyrightBase,
    {
      color: colors.notFoundCopyright,
    },
  ],
});
