import React from "react";
import Image from "next/image";
import {
  imageAStyle,
  imageStyle,
  cardStyle,
  dateStyle,
  titleStyle,
  descriptionStyle,
  categoryAndDateStyle,
  categoryStyle,
} from "./style.css";
import { BlogCardProps } from "@/types/BlogCard";
import dayjs from "dayjs";

export const BlogCard = ({
  title,
  category,
  thumbnail,
  articleSlug,
  revisedAt,
}: BlogCardProps) => {
  const formattedDate = dayjs(revisedAt).format("YYYY.MM.DD");

  return (
    <div className={cardStyle}>
      <a href={`blog/${articleSlug}`} target="_blank" className={imageAStyle}>
        <Image
          className={imageStyle}
          src={thumbnail.url}
          alt="Features Image"
          width={thumbnail.width}
          height={thumbnail.height}
          unoptimized
        />
      </a>
      <a
        href={`blog/${articleSlug}`}
        target="_blank"
        className={descriptionStyle}
      >
        <div className={categoryAndDateStyle}>
          {category && (!Array.isArray(category) || category.length > 0) && (
            <p className={categoryStyle}>{category}</p>
          )}
          <p className={dateStyle}>{formattedDate}</p>
        </div>
        <p className={`${titleStyle} line-clamp-2`}>{title}</p>
      </a>
    </div>
  );
};
