import Link from "next/link";
import type { ContentType } from "@/config/previewCookies";
import { API_ROUTES } from "@/constants/apiRoutes";
import * as styles from "./style.css";

type Props = { type: ContentType };

export function PreviewBanner({ type }: Props) {
  const disableHref = `${API_ROUTES.draftDisable}?type=${type}`;

  return (
    <div className={styles.container}>
      プレビュー表示中
      <Link href={disableHref} className={styles.link}>
        解除して一覧へ
      </Link>
    </div>
  );
}
