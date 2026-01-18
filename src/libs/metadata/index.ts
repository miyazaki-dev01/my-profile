import type { Metadata } from "next";
import { META_TEXT } from "@/constants/metaTexts";

const DEFAULT_IMAGE = META_TEXT.root.defaultImage;

type CreateMetadataArgs = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
};

export function createMetadata({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  type = "website",
  noindex = false,
}: CreateMetadataArgs): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type,
      images: [{ url: image, alt: title }],
      locale: "ja_JP",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
