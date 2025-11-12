import { style } from "@vanilla-extract/css";
import colors from "@/theme/colors";
import fontSizes from "@/theme/fontSize";
import fontWeight from "@/theme/fontWeight";
import space from "@/theme/space";
import breakpoints from "@/theme/breakpoints";

// PC
export const sidebarAsideStyle = style({
  display: "none",
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      display: "flex",
      position: "fixed",
      top: 0,
      left: 0,
      height: "100%",
      width: "230px",
      paddingLeft: "2.5rem",
      paddingTop: "2.5rem",
      paddingBottom: "2.5rem",
      zIndex: 50,
    },
  },
});

export const sidebardivStyle = style({
  borderRightColor: colors.darkGray,
  borderRightWidth: ".5px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  paddingRight: "2.5rem",
});

export const iconStyle = style({
  width: "fit-content",
});

export const navStyle = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  flexGrow: 1,
  marginTop: "4rem",
});

export const linksStyle = style({
  color: colors.brack,
  display: "flex",
  flexDirection: "column",
  gap: space.xxxl,
  fontSize: fontSizes.l,
  fontWeight: fontWeight.normal,
});
export const LinkStyle = style({
  width: "fit-content",
  ":hover": {
    color: colors.lightGray,
  },
});

export const contactStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: space.xl,
  marginBottom: space.m,
});

export const contactLinkStyle = style({
  color: colors.brack,
  fontSize: fontSizes.l,
  fontWeight: fontWeight.normal,
  width: "fit-content",
  ":hover": {
    color: colors.lightGray,
  },
});

export const copyrightStyle = style({
  fontSize: fontSizes.xs,
  color: colors.darkGray,
  fontWeight: fontWeight.normal,
});

// SP
export const spMenuStyle = style({
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      display: "none",
    },
  },
});

export const headerStyle = style({
  backgroundColor: colors.paleWhite,
  boxShadow: `0 3px 3px ${colors.lightGray}`,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "fixed",
  paddingRight: "1rem",
  paddingLeft: "1rem",
  width: "100%",
  height: "50px",
  zIndex: 70,
});

export const headerTransparentStyle = style({
  backgroundColor: "transparent",
  boxShadow: "none",
});

export const mobileMenuStyle = style({
  display: "flex",
  alignItems: "center",
  overflowY: "auto",
  position: "fixed",
  width: "100vw",
  height: "100vh",
  backgroundColor: colors.brack,
  opacity: 0,
  visibility: "hidden",
  transition: "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
  zIndex: 60,
});

export const mobileMenuOpenStyle = style({
  opacity: 1,
  visibility: "visible",
});

export const mobileMenuDivStyle = style({
  opacity: 1,
  transform: "none",
  width: "100%",
  maxHeight: "100%",
});

export const mobileMenuNavStyle = style({
  display: "flex",
  flexDirection: "column",
  color: colors.paleWhite,
  paddingLeft: "3rem",
  paddingTop: "60px",
  paddingBottom: "60px",
  fontSize: fontSizes.xl,
  fontWeight: fontWeight.midium,
  gap: "70px",
});

export const navItemsStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: "30px",
});

export const linksTextStyle = style({
  width: "fit-content",
});

export const homeLinkSpStyle = style({
  width: "fit-content",
});

export const contactLinkSpStyle = style({
  width: "fit-content",
});
