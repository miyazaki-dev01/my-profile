import { style } from "@vanilla-extract/css";
import { colors } from "@/themes/colors";

export const snsShareIconsWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: "1.2rem",
});

export const snsIconButton = style({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  gap: "0.8rem",
});

export const copyLinkWrapper = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
});

export const copyLinkButton = style({
  background: "transparent",
  border: "none",
  padding: 0,
  cursor: "pointer",
});

export const copyLinkIcon = style({
  width: "24px",
  height: "24px",
  display: "block",
  color: colors.black,
});

export const copyLinkTooltip = style({
  position: "absolute",
  bottom: "100%",
  left: "50%",
  transform: "translate(-50%, -6px)",
  padding: "0.4rem 0.6rem",
  fontFamily: "var(--font-roboto)",
  fontSize: "12px",
  fontWeight: 500,
  lineHeight: 1,
  letterSpacing: 0,
  color: colors.white,
  background: colors.black,
  borderRadius: "4px",
  whiteSpace: "nowrap",
  pointerEvents: "none",
  opacity: 0,

  selectors: {
    [`${copyLinkWrapper}:hover &`]: {
      opacity: 1,
    },
    [`${copyLinkButton}:focus-visible + &`]: {
      opacity: 1,
    },
  },
});
