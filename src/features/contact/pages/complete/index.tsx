"use client";

import { PATH } from "@/constants/paths";
import { useContactComplete } from "@/features/contact/hooks/useContactComplete";
import { CONTACT_TEXT } from "@/features/contact/constants/text";
import { InternalLinkButton } from "@/components/elements/Button/InternalLinkButton";
import * as styles from "./style.css";

export function ContactCompletePage() {
  useContactComplete();

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>{CONTACT_TEXT.complete.pageTitle}</h1>

      <p className={styles.message1}>{CONTACT_TEXT.complete.thanksMessage}</p>
      <p className={styles.message2}>{CONTACT_TEXT.complete.annotation}</p>

      <InternalLinkButton href={PATH.profile} className={styles.completeButton}>
        {CONTACT_TEXT.button.confirmed}
      </InternalLinkButton>
    </div>
  );
}
