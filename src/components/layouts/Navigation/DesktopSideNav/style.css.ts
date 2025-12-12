import { style } from "@vanilla-extract/css";
import { colors } from "@/themes/colors";

export const sidebar = style({
  position: "fixed",
  top: 0,
  left: 0,
  height: "100%",
  width: "260px",
  zIndex: 50,
  padding: "4rem 0 2.5rem 2.5rem",
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
  paddingRight: "2.5rem",
  borderRight: `.5px solid ${colors.lightGray}`,
});

export const sidebarLogo = style({
  width: "fit-content",
});

export const sidebarNav = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  flexGrow: 1,
  marginTop: "4rem",
  gap: "3.75rem",
});

export const sidebarSectionWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "3.75rem",
});

export const sidebarCopyright = style({
  fontSize: "11px",
  color: colors.darkGray,
  fontWeight: 500,
  lineHeight: 1,
  letterSpacing: 0,
  marginTop: "2.5rem",
});
