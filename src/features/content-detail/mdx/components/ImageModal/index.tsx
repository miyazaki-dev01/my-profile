"use client";

import { IMAGE_MODAL_FADE_MS } from "@/features/content-detail/mdx/components/ImageModal/useImageModal";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { Fade } from "@/components/elements/Fade";
import * as styles from "./style.css";

type Props = {
  src: string;
  isOpen: boolean;
  onClose: () => void;
};

/**
 * 画像モーダル（最小）
 * - 背景クリック / × で閉じる
 * - Fade の in でフェードイン/アウトを制御
 * - src がある間（フェードアウト完了まで）スクロールロックを維持
 */
export function ImageModal({ src, isOpen, onClose }: Props) {
  useBodyScrollLock(Boolean(src));

  return (
    <Fade in={isOpen} durationMs={IMAGE_MODAL_FADE_MS}>
      <div className={styles.modalRoot}>
        <div className={styles.backdrop} onClick={onClose}>
          <div
            className={styles.modalShell}
            onClick={(e) => e.stopPropagation()}
          >
            <header className={styles.modalHeader}>
              <div className={styles.headerActions}>
                <button
                  type="button"
                  className={styles.actionButton}
                  onClick={onClose}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.fillWhite}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="m7.227 6.166-1.06 1.061L10.938 12l-4.773 4.773 1.061 1.06L12 13.062l4.773 4.773 1.06-1.061L13.062 12l4.773-4.773-1.061-1.06L12 10.938 7.227 6.166Z"
                    />
                  </svg>
                </button>
              </div>
            </header>

            <div className={styles.bodySpacer}>
              <div className={styles.bodyInner}>
                <div className={styles.imageFrame}>
                  <img
                    src={src}
                    alt=""
                    loading="lazy"
                    className={styles.image}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
