import { style, createVar } from "@vanilla-extract/css";
import { colors } from "@/theme/colors";

const tyVar = createVar(); // translateY
const rotVar = createVar(); // rotate
const easing = "cubic-bezier(.4,0,.2,1)";

export const headerBase = style({
  position: "fixed",
  top: 0,
  zIndex: 70,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "60px",
  width: "100%",
  paddingLeft: "24px",
  paddingRight: "16px",
  background: colors.headerBackground,
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
});

export const headerOpen = style({
  backgroundColor: "transparent",
});

export const menuButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "32px",
  height: "32px",
  cursor: "pointer",
});

export const menuIconStack = style({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const bar = style({
  width: "20px",
  height: "2px",
  background: colors.black,
});

export const transformable = style({
  transition: `transform 0.3s ${easing}, background-color 0.3s ${easing}`,
  vars: { [tyVar]: "0px", [rotVar]: "0deg" },
  transform: `translateY(${tyVar}) rotate(${rotVar})`,
});

export const fadeable = style({
  transition: `opacity 0.3s ${easing}, background-color 0.3s ${easing}`,
  opacity: 1,
});

export const openTop = style({
  backgroundColor: colors.white,
  vars: { [tyVar]: "6px", [rotVar]: "45deg" },
});

export const openMiddle = style({
  backgroundColor: colors.white,
  opacity: 0,
});

export const openBottom = style({
  backgroundColor: colors.white,
  vars: { [tyVar]: "-6px", [rotVar]: "-45deg" },
});

export const overlay = style({
  position: "fixed",
  inset: 0,
  zIndex: 60,
  display: "flex",
  alignItems: "center",
  overflowY: "auto",
  backgroundColor: colors.black,
  opacity: 0,
  visibility: "hidden",
  transition: "opacity 0.4s ease-in-out, visibility 0.4s ease-in-out",
});

export const overlayOpen = style({
  opacity: 1,
  visibility: "visible",
});

export const panel = style({
  maxHeight: "100%",
  width: "100%",
  opacity: 0,

  transform: "translateY(12px)",
  transition: "opacity 0.4s ease-in-out, transform 0.4s ease-in-out",
});

export const panelOpen = style({
  opacity: 1,
  transform: "none",
});

export const nav = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  color: colors.black,
  paddingTop: "84px",
  paddingBottom: "60px",
  paddingLeft: "48px",
  gap: "100px",
  transition: "color 0.5s ease-in-out",
});

export const navOpen = style({
  color: colors.white,
});

export const headerSectionWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "60px",
});
