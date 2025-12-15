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
  const { tag, src, alt = "", fallbackSrc } = props;
  const { imageSrc, handleError } = useFallbackImage({ src, fallbackSrc });

  if (tag === "img") {
    const {
      tag: _tag,
      src: _src,
      alt: _alt,
      fallbackSrc: _fallbackSrc,
      ...rest
    } = props as ImgVariantProps;

    return <img src={imageSrc} alt={alt} onError={handleError} {...rest} />;
  }

  const {
    tag: _tag,
    src: _src,
    alt: _alt,
    fallbackSrc: _fallbackSrc,
    ...rest
  } = props as NextImageVariantProps;

  return (
    <Image src={imageSrc} alt={alt} fill onError={handleError} {...rest} />
  );
}
