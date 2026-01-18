"use client";

import { PageTitle } from "@/components/elements/PageTitle";
import { PAGES } from "@/constants/pages";
import { useContactConfirm } from "@/features/contact/hooks/useContactConfirm";
import { ConfirmItem } from "@/features/contact/components/ConfirmItem";
import { ActionButton } from "@/components/elements/Button/ActionButton";
import { CONTACT_TEXT } from "@/features/contact/constants/text";
import * as styles from "./style.css";

export function ContactConfirmPage() {
  const {
    formData,
    isSubmitting,
    submitError,
    isValid,
    handleEdit,
    handleSubmit,
  } = useContactConfirm();

  if (!isValid) return null;

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <PageTitle>{PAGES.contact.title}</PageTitle>

        <p className={styles.description}>{CONTACT_TEXT.description.confirm}</p>

        <div className={styles.confirmListRoot}>
          <div className={styles.confirmListWrap}>
            <div className={styles.confirmListContainer}>
              <ul className={styles.confirmList}>
                <ConfirmItem
                  label={CONTACT_TEXT.label.name}
                  value={formData.name}
                />
                <ConfirmItem
                  label={CONTACT_TEXT.label.email}
                  value={formData.email}
                />
                <ConfirmItem
                  label={CONTACT_TEXT.label.title}
                  value={formData.title}
                />
                <ConfirmItem
                  label={CONTACT_TEXT.label.message}
                  value={formData.message}
                />
              </ul>
            </div>
          </div>
        </div>

        {submitError ? (
          <p className={`${styles.errorBase} ${styles.errer}`}>
            {CONTACT_TEXT.message.submitError}
          </p>
        ) : (
          <p className={`${styles.errorBase} ${styles.none}`}></p>
        )}

        <div className={styles.buttonRow}>
          <ActionButton
            type="button"
            onClick={handleSubmit}
            isLoading={isSubmitting}
            className={styles.submit}
          >
            {CONTACT_TEXT.button.submit}
          </ActionButton>
          <ActionButton
            type="button"
            variant="white"
            onClick={handleEdit}
            disabled={isSubmitting}
            className={styles.edit}
          >
            {CONTACT_TEXT.button.edit}
          </ActionButton>
        </div>
      </div>
    </div>
  );
}
