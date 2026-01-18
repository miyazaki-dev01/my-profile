"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { PATH } from "@/constants/paths";
import { contactSchema } from "@/features/contact/validation/contactSchema";
import { useContactFormContext } from "@/features/contact/contexts/ContactFormContext";

export function useContactConfirm() {
  const router = useRouter();
  const { formData } = useContactFormContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const validation = useMemo(
    () => contactSchema.safeParse(formData),
    [formData]
  );

  useEffect(() => {
    if (!validation.success) {
      router.replace(PATH.contact);
    }
  }, [validation.success, router]);

  const handleEdit = () => {
    router.push(PATH.contact);
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    setSubmitError(false);

    let success = false;

    try {
      const endpoint = process.env.NEXT_PUBLIC_CONTACT_API_ENDPOINT;
      if (!endpoint) throw new Error("endpoint missing");

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("request failed");

      success = true;
      router.push(PATH.contactComplete);
    } catch {
      setSubmitError(true);
    } finally {
      if (!success) setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    submitError,
    isValid: validation.success,
    handleEdit,
    handleSubmit,
  };
}
