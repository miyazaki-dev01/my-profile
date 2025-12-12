"use client";

import { useEffect, useState } from "react";
import { IMAGES, type Images } from "@/constants/images";

const DEFAULT_FALLBACK_SRC = IMAGES.default_thumbnail;

type Args = {
  src?: string | null;
  fallbackSrc?: Images;
};

/**
 * 「画像がない or 読み込みエラー」の場合に
 * デフォルト画像へフォールバックするためのフック
 */
export function useFallbackImage({ src, fallbackSrc }: Args) {
  const effectiveFallback = fallbackSrc
    ? IMAGES[fallbackSrc]
    : DEFAULT_FALLBACK_SRC;

  const normalizeSrc = (value?: string | null): string => {
    const trimmed = value?.trim();
    return trimmed ? trimmed : effectiveFallback;
  };

  const [imageSrc, setImageSrc] = useState<string>(() => normalizeSrc(src));

  useEffect(() => {
    setImageSrc(normalizeSrc(src));
  }, [src, effectiveFallback]);

  const handleError = () => setImageSrc(effectiveFallback);

  return { imageSrc, handleError };
}
