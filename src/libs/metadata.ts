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
  publishedTime?: string;
  modifiedTime?: string;
};

export function createMetadata({
  title,
  description,
  path,
  publishedTime,
  modifiedTime,
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
      siteName: META_TEXT.root.title,
      ...(type === "article" && publishedTime ? { publishedTime } : {}),
      ...(type === "article" && modifiedTime ? { modifiedTime } : {}),
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
