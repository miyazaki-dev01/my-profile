import { style } from "@vanilla-extract/css";
import { breakpoints } from "@/themes/breakpoints";
import { colors } from "@/themes/colors";

const tbMedia = `screen and (min-width: ${breakpoints.tablet}px)`;

export const modalRoot = style({
  position: "relative",
  zIndex: 80,
});

export const backdrop = style({
  position: "fixed",
  inset: 0,
  backgroundColor: "transparent",
  "@media": {
    [tbMedia]: {
      backgroundColor: colors.sideNavBackground,
      padding: "3rem",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
    },
  },
});

export const modalShell = style({
  position: "relative",
  height: "100%",
  width: "100%",
  overflow: "auto",
  backgroundColor: colors.imageModalBackdrop,
  scrollbarWidth: "none",
  selectors: {
    "&::-webkit-scrollbar": { display: "none" },
  },
  "@media": {
    [tbMedia]: {
      borderRadius: "16px",
    },
  },
});

export const modalHeader = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1,
  display: "flex",
  alignItems: "center",
  height: "60px",
  color: colors.white,
  backgroundColor: colors.imageModalBackdrop,
  "@media": {
    [tbMedia]: {
      backgroundColor: "transparent",
      left: "3rem",
      right: "3rem",
      top: "3rem",
      marginLeft: "2.5rem",
      marginRight: "2.5rem",
      marginTop: "2.5rem",
      height: "2rem",
    },
  },
});

export const headerActions = style({
  position: "absolute",
  right: "1rem",
  top: 0,
  zIndex: 1,
  display: "flex",
  height: "100%",
  alignItems: "center",
  "@media": {
    [tbMedia]: {
      right: 0,
    },
  },
});

export const actionButton = style({
  cursor: "pointer",
});

export const fillWhite = style({
  fill: colors.white,
});

export const bodySpacer = style({
  height: "100%",
  paddingTop: "60px",
  "@media": {
    [tbMedia]: {
      paddingTop: 0,
    },
  },
});

export const bodyInner = style({
  display: "flex",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
  padding: "1.25rem 0.5rem",
  "@media": {
    [tbMedia]: {
      padding: "7rem 2rem",
    },
  },
});

export const imageFrame = style({
  display: "flex",
  height: "100%",
  maxHeight: "100%",
  maxWidth: "1000px",
  alignItems: "center",
  justifyContent: "center",
});

export const image = style({
  maxHeight: "100%",
  maxWidth: "100%",
  borderRadius: ".25rem",
  objectFit: "contain",
  pointerEvents: "none",
  display: "block",
});
