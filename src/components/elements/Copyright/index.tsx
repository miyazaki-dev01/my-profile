import { COPYRIGHT } from "@/constants/copyright";
import * as styles from "./style.css";

type copyrightStyles = keyof typeof styles.copyrightVariant;

type Props = {
  style: copyrightStyles;
  tag?: "div" | "small";
};

export function Copyright({ style, tag: Tag = "div" }: Props) {
  return (
    <Tag className={styles.copyrightVariant[style]}>{COPYRIGHT}</Tag>
  );
}
