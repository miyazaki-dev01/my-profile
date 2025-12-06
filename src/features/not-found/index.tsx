import Link from "next/link";
import { Logo } from "@/components/elements/Logo";
import { PATH } from "@/constants/paths";
import { COPYRIGHT } from "@/constants/copyright";
import * as styles from "./style.css";

export function NotFoundPage() {
  return (
    <>
      <Link href={PATH.profile} className={styles.brandLogoLink}>
        <Logo logoStyle="notFoundHeader" fill="white" />
      </Link>
      <main className={styles.main}>
        <div className={styles.gridContainer}>
          <div className={styles.logoWrapper}>
            <Logo logoStyle="NotFoundCenter" fill="white" />
          </div>
          <div className={styles.gridBody}>
            <p className={styles.notFoundMessage}>
              お探しのページは見つかりませんでした
            </p>
            <Link href={PATH.profile} className={styles.notFoundButton}>
              <span>トップページへ</span>
            </Link>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <small className={styles.footerText}>{COPYRIGHT}</small>
      </footer>
    </>
  );
}
