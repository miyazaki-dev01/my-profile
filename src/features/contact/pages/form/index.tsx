"use client";

import { PageTitle } from "@/components/elements/PageTitle";
import { PAGES } from "@/constants/pages";
import { useContactForm } from "@/features/contact/hooks/useContactForm";
import { FormField } from "@/features/contact/components/FormField";
import { CONTACT_TEXT } from "@/features/contact/constants/text";
import { ActionButton } from "@/components/elements/Button/ActionButton";
import * as styles from "./style.css";

export function ContactPage() {
  const {
    formData,
    isValid,
    getError,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useContactForm();

  return (
    <div className={styles.root}>
      <PageTitle>{PAGES.contact.title}</PageTitle>

      <p className={styles.description}>{CONTACT_TEXT.description.form}</p>

      <form onSubmit={handleSubmit}>
        <div className={styles.form}>
          <FormField
            id="contact-name"
            label={CONTACT_TEXT.label.name}
            placeholder={CONTACT_TEXT.placeholder.name}
            maxLength={100}
            value={formData.name}
            onBlur={handleBlur("name")}
            onChange={handleChange("name")}
            error={getError("name")}
          />

          <FormField
            id="contact-email"
            label={CONTACT_TEXT.label.email}
            placeholder={CONTACT_TEXT.placeholder.email}
            maxLength={100}
            type="email"
            value={formData.email}
            caption={CONTACT_TEXT.caption.email}
            onBlur={handleBlur("email")}
            onChange={handleChange("email")}
            error={getError("email")}
          />

          <FormField
            id="contact-title"
            label={CONTACT_TEXT.label.title}
            placeholder={CONTACT_TEXT.placeholder.title}
            maxLength={300}
            value={formData.title}
            onBlur={handleBlur("title")}
            onChange={handleChange("title")}
            error={getError("title")}
          />

          <FormField
            id="contact-message"
            as="textarea"
            label={CONTACT_TEXT.label.message}
            placeholder={CONTACT_TEXT.placeholder.message}
            maxLength={5000}
            value={formData.message}
            onBlur={handleBlur("message")}
            onChange={handleChange("message")}
            error={getError("message")}
          />
        </div>

        <div className={styles.buttonRow}>
          <ActionButton
            type="submit"
            disabled={!isValid}
            className={styles.button}
          >
            {CONTACT_TEXT.button.confirme}
          </ActionButton>
        </div>
      </form>
    </div>
  );
}
