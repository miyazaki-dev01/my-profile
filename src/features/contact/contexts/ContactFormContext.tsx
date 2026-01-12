"use client";

import { createContext, useContext } from "react";
import type { ContactFormData } from "@/features/contact/validation/contactSchema";

export type ContactFormContextValue = {
  formData: ContactFormData;
  setFormData: React.Dispatch<React.SetStateAction<ContactFormData>>;
  resetFormData: () => void;
};

export const ContactFormContext = createContext<ContactFormContextValue | null>(
  null
);

export function useContactFormContext() {
  const ctx = useContext(ContactFormContext);
  if (!ctx) {
    throw new Error(
      "useContactFormContext must be used inside ContactFormProvider"
    );
  }
  return ctx;
}
