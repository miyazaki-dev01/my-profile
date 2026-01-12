"use client";

import { useCallback, useMemo, useState } from "react";
import type { ContactFormData } from "@/features/contact/validation/contactSchema";
import { ContactFormContext } from "@/features/contact/contexts/ContactFormContext";

const createInitialData = (): ContactFormData => ({
  name: "",
  email: "",
  title: "",
  message: "",
});

export function ContactFormProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [formData, setFormData] = useState<ContactFormData>(createInitialData);

  const resetFormData = useCallback(() => {
    setFormData(createInitialData());
  }, []);

  const value = useMemo(
    () => ({ formData, setFormData, resetFormData }),
    [formData, resetFormData]
  );

  return (
    <ContactFormContext.Provider value={value}>
      {children}
    </ContactFormContext.Provider>
  );
}
