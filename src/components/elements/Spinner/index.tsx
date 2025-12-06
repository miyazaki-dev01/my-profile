import * as styles from "./style.css";

export type SpinnerColor = "black" | "white";

type Props = {
  size: number;
  color?: SpinnerColor;
};

export function Spinner({ size, color = "black" }: Props) {
  return (
    <div
      className={`${styles.spinner} ${styles.spinnerColor[color]}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    ></div>
  );
}
