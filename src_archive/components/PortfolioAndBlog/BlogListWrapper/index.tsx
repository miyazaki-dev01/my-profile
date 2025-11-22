"use client";

import React from "react";
import Link from "next/link";
import { useScrollRestoration } from "@/hooks/useScrollRestoration";
import { BlogsProps } from "@/types/BlogCard";
import dayjs from "dayjs";
import Image from "next/image";
import ListPageTitle from "../ListPageTitle";
import Loader from "@/components/PortfolioAndBlog/Loader";
import { usePageLoading } from "@/hooks/usePageLoading";
import {
  blogsStyle,
  blogStyle,
  categoryStyle,
  blogTitleStyle,
  blogDateStyel,
  blogImageDivStyle,
  blogImageStyle,
} from "./style.css";

export default function BlogListWrapper({ blogs }: BlogsProps) {
  useScrollRestoration();

  // ページの全リソース（画像・CSSなど含む）が読み込まれたかどうかを判定するカスタムフック
  const loaded = usePageLoading();

  return (
    <>
      {!loaded && <Loader />}

      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.6s ease-in-out",
        }}
      >
        <ListPageTitle title="Blog" isBorder={false} />
        <div className={blogsStyle}>
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.articleSlug}`}
              className={blogStyle}
            >
              <div>
                {blog.category && blog.category.length > 0 && (
                  <span className={categoryStyle}>{blog.category}</span>
                )}
                <h2 className={blogTitleStyle}>{blog.title}</h2>
                <p className={blogDateStyel}>
                  {dayjs(blog.revisedAt).format("YYYY.MM.DD")}
                </p>
              </div>
              <div className={blogImageDivStyle}>
                <Image
                  src={blog.thumbnail.url}
                  alt="Blog Image"
                  width={blog.thumbnail.width}
                  height={blog.thumbnail.height}
                  unoptimized
                  className={blogImageStyle}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
