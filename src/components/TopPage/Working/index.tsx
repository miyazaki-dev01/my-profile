import React from "react";
import {
  WorkingStyle,
  titleStyle,
  workingItemStyle,
  workingContentStyle,
  workingContentTitleStyle,
  workingContentItemStyle,
  contactStyle,
} from "./style.css";
import { Contact } from "@/components/Form";
import { WorkingItem } from "./WorkingItem";
import { WorkingContent } from "./WorkingCategory";
import { BasicLayout } from "@/components/TopPage/BasicLayout";

const WORKING_ITEMS: React.ComponentProps<typeof WorkingItem>[] = [
  {
    content: "単価：1,000～/h",
  },
  {
    content: "稼働時間：10h/週",
  },
  {
    content: "web会議可能",
  },
] as const;

const WORKING_CONTENT: React.ComponentProps<typeof WorkingItem>[] = [
  {
    content: "Webプログラミング",
  },
  {
    content: "Webサイト更新・保守",
  },
  {
    content: "サイト構築・ウェブ開発",
  },
  {
    content: "ホームページ作成・更新・機能追加",
  },
  {
    content: "ランディングページ（LP）制作",
  },
  {
    content: "スクレイピング・データ収集",
  },
  {
    content: "その他（システム開発）",
  },
] as const;

export const Working: React.FC = () => {
  return (
    <>
      <BasicLayout themeColor="white" id="Working">
        <div className={WorkingStyle}>
          <div className={titleStyle}>Works</div>

          <div className={workingItemStyle}>
            {WORKING_ITEMS.map((item, index) => (
              <WorkingItem key={index} {...item} />
            ))}
          </div>

          <div className={workingContentStyle}>
            <div className={workingContentTitleStyle}>Category</div>
            <div className={workingContentItemStyle}>
              {WORKING_CONTENT.map((item, index) => (
                <WorkingContent key={index} {...item} />
              ))}
            </div>
          </div>

          <div className={contactStyle}>
            <Contact />
          </div>
        </div>
      </BasicLayout>
    </>
  );
};
