"use client";

import React from "react";
import Image, { type ImageProps } from "next/image";
import { useFallbackImage } from "./useFallbackImage";
import type { Images } from "@/constants/images";

type CommonProps = {
  src?: string | null;
  alt?: string;
  fallbackSrc?: Images;
};

type ImgVariantProps = CommonProps &
  Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src" | "alt" | "onError"> & {
    tag: "img";
  };

type NextImageVariantProps = CommonProps &
  Omit<ImageProps, "src" | "alt" | "onError" | "fill" | "width" | "height"> & {
    tag: "Image";
  };

type FallbackImageProps = ImgVariantProps | NextImageVariantProps;

export function FallbackImage(props: FallbackImageProps) {
  const { tag, src, alt = "", fallbackSrc, ...rest } = props;
  const { imageSrc, handleError } = useFallbackImage({ src, fallbackSrc });

  if (tag === "img") {
    return (
      <img
        src={imageSrc}
        alt={alt}
        onError={handleError}
        {...(rest as Omit<
          ImgVariantProps,
          "tag" | "src" | "alt" | "fallbackSrc"
        >)}
      />
    );
  }

  return (
    <Image
      src={imageSrc}
      alt={alt}
      fill
      onError={handleError}
      {...(rest as Omit<
        NextImageVariantProps,
        "tag" | "src" | "alt" | "fallbackSrc"
      >)}
    />
  );
}
