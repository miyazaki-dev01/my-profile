import React from "react";
import Link from "next/link";
import * as styles from "./style.css";

export default function NotFoundPage() {
  return (
    <div className={styles.notFoundStyle}>
      <h1 className={styles.h1Style}>404 Not Found</h1>
      <p className={styles.pStyle}>お探しのページは見つかりませんでした</p>
      <div className={styles.linksStyle}>
        <Link href="/" className={styles.linkStyle}>
          トップページへ
        </Link>
        <Link href="/portfolio" className={styles.linkStyle}>
          ポートフォリオ一覧
        </Link>
        <Link href="/blog" className={styles.linkStyle}>
          ブログ一覧
        </Link>
      </div>
    </div>
  );
}
