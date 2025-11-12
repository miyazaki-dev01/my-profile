import React from "react";
import { imageStyle, ImageSize } from "./style.css";
import Link, { LinkProps } from "next/link";

type TopIconProps = {
  href: LinkProps["href"];
  alt: string;
  src: string;
  size?: ImageSize;
};

export const IconLink: React.FC<TopIconProps> = ({
  size = "small",
  href,
  alt,
  src,
}) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <img src={src} alt={alt} className={imageStyle[size]} />
    </Link>
  );
};
