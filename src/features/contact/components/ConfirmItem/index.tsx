import * as styles from "./style.css";

type Props = {
  label: string;
  value: string;
};

export function ConfirmItem({ label, value }: Props) {
  return (
    <li>
      <p className={styles.label}>{label}</p>
      <p className={styles.value}>{value}</p>
    </li>
  );
}
