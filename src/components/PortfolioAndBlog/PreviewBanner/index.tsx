import React from "react";
import Link from "next/link";
import type { ContentType } from "@/config/preview-cookies";
import * as style from "./style.css";

type PreviewBannerProps = {
  type: ContentType;
};

export default function PreviewBanner({ type }: PreviewBannerProps) {
  const disableHref = `/api/draft-disable?type=${type}`;

  return (
    <div className={style.container}>
      プレビュー表示中
      <Link href={disableHref} className={style.link}>
        解除して一覧へ
      </Link>
    </div>
  );
}
