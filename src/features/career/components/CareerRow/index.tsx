import type { CareerItemWithYear } from "@/features/career/utils/careerModel";
import { formatYearMonth } from "@/libs/date";
import * as styles from "./style.css";

type Props = {
  item: CareerItemWithYear;
};

export function CareerRow({ item }: Props) {
  const hasBody = Boolean(item.body?.trim());

  return (
    <li className={styles.item}>
      {hasBody ? (
        <details className={styles.details}>
          <summary className={styles.summary}>
            <span className={styles.container}>
              <span className={styles.left}>
                <p className={styles.title}>{item.title}</p>
                <p className={styles.date}>{formatYearMonth(item.date)}</p>
              </span>

              <span className={styles.chevron} aria-hidden>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m6 10.25 5.657 5.657 5.657-5.657"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </span>
          </summary>

          <div className={styles.bodyOuter}>
            <p className={styles.body}>{item.body}</p>
          </div>
        </details>
      ) : (
        <div className={styles.containerStatic}>
          <div className={styles.left}>
            <p className={styles.title}>{item.title}</p>
            <p className={styles.date}>{formatYearMonth(item.date)}</p>
          </div>
        </div>
      )}
    </li>
  );
}
