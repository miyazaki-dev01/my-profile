"use client";

import { useEffect } from "react";
import { useContactFormContext } from "@/features/contact/contexts/ContactFormContext";

export function useContactComplete() {
  const { resetFormData } = useContactFormContext();

  useEffect(() => {
    resetFormData();
  }, [resetFormData]);
}
