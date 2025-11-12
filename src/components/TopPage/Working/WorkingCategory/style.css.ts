import { style } from "@vanilla-extract/css";
import breakpoints from "@/theme/breakpoints";
import fontSizes from "@/theme/fontSize";
import fontWeight from "@/theme/fontWeight";

export const categoryIconStyle = style({
  display: "inline-flex",
  alignItems: "center",
  borderRadius: "3px",
  padding: "2px 8px",
  margin: "1.5px 3px",
  fontSize: fontSizes.xxs,
  fontWeight: fontWeight.normal,
  lineHeight: "14px",
  border: "0.5px solid",
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      margin: "3px 3px",
    },
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontSize: fontSizes.xs,
      lineHeight: "18px",
    },
  },
});
