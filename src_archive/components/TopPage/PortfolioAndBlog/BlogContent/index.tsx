"use client";

import React from "react";
import Image from "next/image";
import {
  blogStyle,
  titleStyle,
  swiperStyle,
  arrowLeftStyle,
  arrowRightStyle,
  arrowIconStyle,
  viewAllStyle,
  swiperContentStyle,
} from "./style.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import { BlogCard } from "../BlogCard";
import { BlogsProps } from "@/types/BlogCard";

export const BlogContent = ({ blogs }: BlogsProps) => {
  return (
    <div className={blogStyle}>
      <div className={titleStyle} id="Blog">
        Blog
      </div>
      <div className={swiperStyle}>
        {/* カスタム矢印ボタン（左） */}
        <div className={`custom-prev ${arrowLeftStyle}`}>
          <Image
            src="/blog/arrow_l.svg"
            alt="Previous"
            width={50}
            height={80}
            unoptimized
            className={arrowIconStyle}
          />
        </div>

        {/* Swiperコンテンツ */}
        <Swiper
          className={swiperContentStyle}
          modules={[Navigation, Pagination]}
          slidesPerView={1.2}
          spaceBetween={0}
          pagination={{ clickable: true }}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
              navigation: {
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              },
              pagination: false,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
              navigation: {
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              },
              pagination: false,
            },
          }}
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id}>
              <BlogCard {...blog} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* カスタム矢印ボタン（右） */}
        <div className={`custom-next ${arrowRightStyle}`}>
          <Image
            src="/blog/arrow_r.svg"
            alt="Next"
            width={50}
            height={80}
            unoptimized
            className={`${arrowIconStyle}`}
          />
        </div>
      </div>

      <Link
        href="/blog"
        className={viewAllStyle}
        target="_blank"
        rel="noopener noreferrer"
      >
        View All
      </Link>
    </div>
  );
};
