"use client";

import { useMemo, useState } from "react";
import { useIsDesktop } from "@/hooks/useIsDesktop";
import { Icon } from "@/components/elements/Icon";
import {
  TwitterShareButton,
  FacebookShareButton,
  HatenaShareButton,
} from "react-share";
import { LuLink } from "react-icons/lu";
import * as styles from "./style.css";

type Props = {
  url: string;
  title: string;
};

export function SnsShareIcons({ url, title }: Props) {
  const isDesktop = useIsDesktop();
  const [copied, setCopied] = useState(false);

  const copyLabel = useMemo(() => (copied ? "Copied!" : "Copy link"), [copied]);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch (e) {
      console.error("Failed to copy:", e);
    }
  };

  const handleResetLabel = () => {
    setCopied(false);
  };

  if (!isDesktop) return null;

  return (
    <nav aria-label="共有リンク" className={styles.snsShareIconsWrapper}>
      <div className={styles.snsIconButton}>
        <TwitterShareButton url={url} title={title}>
          <Icon name="X" size={20} />
        </TwitterShareButton>
        <FacebookShareButton url={url} title={title}>
          <Icon name="FACEBOOK" size={24} />
        </FacebookShareButton>
        <HatenaShareButton url={url} title={title}>
          <Icon name="HATENA" size={24} />
        </HatenaShareButton>
      </div>

      <div
        className={styles.copyLinkWrapper}
        onMouseLeave={handleResetLabel}
        onBlur={handleResetLabel}
      >
        <button
          type="button"
          onClick={handleCopyClick}
          className={styles.copyLinkButton}
        >
          <LuLink className={styles.copyLinkIcon} />
        </button>
        <span className={styles.copyLinkTooltip}>{copyLabel}</span>
      </div>
    </nav>
  );
}
