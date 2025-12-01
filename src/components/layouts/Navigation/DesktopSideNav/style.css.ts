import { style } from "@vanilla-extract/css";
import { colors } from "@/theme/colors";

export const sidebar = style({
  position: "fixed",
  top: 0,
  left: 0,
  height: "100%",
  width: "260px",
  zIndex: 50,
  padding: "64px 0px 40px 40px",
  overflowY: "auto",
  scrollbarWidth: "none",
  backgroundColor: colors.sideNavBackground,
  backdropFilter: "blur(54px)",
  WebkitBackdropFilter: "blur(54px)",
});

export const sidebarInner = style({
  display: "flex",
  flexDirection: "column",
  minHeight: "100%",
  paddingRight: "40px",
  borderRight: `0.5px solid ${colors.lightGray}`,
});

export const sidebarLogo = style({
  width: "fit-content",
});

export const sidebarNav = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  flexGrow: 1,
  marginTop: "64px",
  gap: "60px",
});

export const sidebarSectionWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "60px",
});

export const sidebarCopyright = style({
  fontSize: "11px",
  color: colors.darkGray,
  fontWeight: 500,
  lineHeight: 1,
  letterSpacing: 0,
  marginTop: "40px",
});
