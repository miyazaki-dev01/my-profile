"use client";

import Image, { type ImageProps } from "next/image";
import { useFallbackImage } from "./useFallbackImage";
import type { Images } from "@/constants/images";

type FallbackImageBaseProps = Omit<
  ImageProps,
  "src" | "onError" | "alt" | "fill" | "width" | "height"
>;

type FallbackImageProps = FallbackImageBaseProps & {
  src?: string | null;
  alt?: string;
  fallbackSrc?: Images;
};

export function FallbackImage({
  src,
  alt = "",
  fallbackSrc,
  ...rest
}: FallbackImageProps) {
  const { imageSrc, handleError } = useFallbackImage({ src, fallbackSrc });

  return (
    <Image src={imageSrc} alt={alt} fill onError={handleError} {...rest} />
  );
}
