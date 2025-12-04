import { Spinner } from "@/components/elements/Spinner";
import * as styles from "./style.css";

export function LoadingScreen() {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinnerWrapper}>
        <Spinner />
      </div>
    </div>
  );
}
