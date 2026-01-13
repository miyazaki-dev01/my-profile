import { InternalLink } from "@/components/elements/Link/InternalLink";
import { Logo } from "@/components/elements/Logo";
import { PAGES } from "@/constants/pages";
import { NOT_FOUND_TEXT } from "@/features/not-found/constants/text";
import { Copyright } from "@/components/elements/Copyright";
import * as styles from "./style.css";

export function NotFoundPage() {
  return (
    <>
      <InternalLink
        href={PAGES.profile.path}
        scroll={false}
        className={styles.brandLogoLink}
      >
        <Logo style="notFoundHeader" fill="white" />
      </InternalLink>

      <main className={styles.main}>
        <div className={styles.gridContainer}>
          <div className={styles.logoWrapper}>
            <Logo style="notFoundCenter" fill="white" />
          </div>
          <div className={styles.gridBody}>
            <p className={styles.notFoundMessage}>{NOT_FOUND_TEXT.pageTitle}</p>
            <InternalLink
              href={PAGES.profile.path}
              scroll={false}
              className={styles.notFoundButton}
            >
              <span>{NOT_FOUND_TEXT.toTop}</span>
            </InternalLink>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <Copyright style="notFoundFooter" tag="small" />
      </footer>
    </>
  );
}
