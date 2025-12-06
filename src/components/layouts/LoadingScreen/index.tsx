import { Spinner } from "@/components/elements/Spinner";
import { type SpinnerColor } from "@/components/elements/Spinner";
import * as styles from "./style.css";

type Props = {
  spinnerSize: number;
  spinnerColor?: SpinnerColor;
};

export function LoadingScreen({ spinnerSize, spinnerColor }: Props) {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinnerWrapper}>
        <Spinner size={spinnerSize} color={spinnerColor} />
      </div>
    </div>
  );
}
