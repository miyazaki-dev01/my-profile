import { style } from "@vanilla-extract/css";
import space from "@/theme/space";

export const imageWrapper = style({
  overflow: "hidden",
  maxWidth: "100%",
  textAlign: "left",
  marginBlock: space.l,
});

export const image = style({
  height: "auto",
  maxWidth: "100%", // 親幅を超えない
  width: "auto", // 元画像の幅を尊重
  borderRadius: "2px",
});
