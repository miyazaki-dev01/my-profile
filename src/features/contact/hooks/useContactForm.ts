"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { PATH } from "@/constants/paths";
import {
  contactSchema,
  type ContactFormData,
} from "@/features/contact/validation/contactSchema";
import { useContactFormContext } from "@/features/contact/contexts/ContactFormContext";

const initialTouched: Record<keyof ContactFormData, boolean> = {
  name: false,
  email: false,
  title: false,
  message: false,
};

export function useContactForm() {
  const router = useRouter();
  const { formData, setFormData } = useContactFormContext();
  const [touched, setTouched] = useState(initialTouched);

  const validation = useMemo(
    () => contactSchema.safeParse(formData),
    [formData]
  );

  const fieldErrors = validation.success
    ? {}
    : z.flattenError(validation.error).fieldErrors;

  const getError = (key: keyof ContactFormData) =>
    touched[key] ? fieldErrors[key]?.[0] : undefined;

  const handleBlur = (key: keyof ContactFormData) => () => {
    setTouched((prev) => ({ ...prev, [key]: true }));
  };

  const handleChange =
    (key: keyof ContactFormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.value;
      setTouched((prev) => ({ ...prev, [key]: true }));
      setFormData((prev) => ({ ...prev, [key]: value }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validation.success) {
      router.push(PATH.contactConfirm);
    }
  };

  const isValid = validation.success;

  return {
    formData,
    isValid,
    getError,
    handleBlur,
    handleChange,
    handleSubmit,
  };
}
