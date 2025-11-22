import fontSizes from "@/theme/fontSize";
import fontWeight from "@/theme/fontWeight";
import space from "@/theme/space";
import { style } from "@vanilla-extract/css";

export const container = style({
  border: "1.5px solid #DC2647",
  backgroundColor: "#FCEAED",
  borderRadius: 8,
  padding: "8px 12px",
  fontWeight: fontWeight.normal,
  fontSize: fontSizes.m,
  color: "#DC2647",
});

export const link = style({
  fontWeight: fontWeight.bold,
  fontSize: fontSizes.s,
  color: "black",
  marginLeft: space.m,
  textDecoration: "underline",
});
