"use client";

import React from "react";
import { BlogDetailProps } from "@/types/BlogContent";
import { useScrollRestoration } from "@/hooks/useScrollRestoration";
import { usePageLoading } from "@/hooks/usePageLoading";
import { URL } from "@/constants/url";
import { PATH } from "@/constants/paths";
import Loader from "@/components/PortfolioAndBlog/Loader";
import * as styles from "./style.css";
import { SnsShareIcons } from "@/components/PortfolioAndBlog/ContentPage/SnsShareIcon";
import { TbClock } from "react-icons/tb";
import { GrUpdate } from "react-icons/gr";
import dayjs from "dayjs";

type Props = {
  blogContent: BlogDetailProps;
  children: React.ReactNode;
};

export default function BlogClientWrapper({ blogContent, children }: Props) {
  useScrollRestoration();

  // ページの全リソースが読み込まれたかどうかを判定するカスタムフック
  const loaded = usePageLoading();

  const url = `${URL.appRoot}${PATH.blog}/${blogContent.articleSlug}`;

  return (
    <>
      {!loaded && <Loader />}

      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.6s ease-in-out",
        }}
      >
        <div className={styles.contentDivStyle}>
          <div className={styles.ContentMarginStyle}>
            <div className={styles.wrapper}>
              <h1 className={styles.titleStyle}>{blogContent.title}</h1>
              {blogContent.category && blogContent.category.length > 0 && (
                <div className={styles.categoryStyle}>
                  {blogContent.category}
                </div>
              )}
              <div className={styles.daysStyle}>
                <div className={styles.dateStyle}>
                  <TbClock className={styles.publishedIcon} />
                  {dayjs(blogContent.publishedAt).format("YYYY.MM.DD")}
                </div>
                <div className={styles.dateStyle}>
                  <GrUpdate className={styles.updateIcon} />
                  {dayjs(blogContent.revisedAt).format("YYYY.MM.DD")}
                </div>
              </div>
            </div>

            {children}

            <SnsShareIcons url={url} title={blogContent.title} />
          </div>
        </div>
      </div>
    </>
  );
}
