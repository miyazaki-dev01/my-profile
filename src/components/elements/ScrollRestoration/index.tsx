"use client";

import { useScrollRestoration } from "@/hooks/useScrollRestoration";
import { useContentLoadingContext } from "@/contexts/ContentLoadingContext";

export function ScrollRestoration() {
  const { isContentLoading } = useContentLoadingContext();
  useScrollRestoration({ isPageLoading: isContentLoading });
  return null;
}
