import React from "react";
import {
  titleStyle,
  CareerStyle,
  CareerItemStyle,
  CareerContentStyle,
  CareerTitleStyle,
} from "./style.css";
import { CareerIcon } from "./Icon";
import { CareerContent } from "./Content";
import { BasicLayout } from "@/components/TopPage/BasicLayout";

const UNIVERSITY_CONTENT: React.ComponentProps<typeof CareerContent>[] = [
  {
    date: "2021.10",
    title: "プログラミングとの出会い",
    text: "大学では機械系の専攻だったが、C言語の講義を受けた際に「パズルみたいで面白い」と感じ、そこからプログラミングに興味を持ち始める。",
  },
  {
    date: "2022.5",
    title: "競プロをやってみる",
    text: "純粋なプログラミングを楽しみたいという思いから競プロを始める。言語はC++で、初めはアルゴリズムや計算量の考えに苦戦しながらも、慣れていくと問題を解く楽しみを感じるようになる。",
  },
  {
    date: "2022.9",
    title: "ハッカソンに参加",
    text: "就活の一環としてハッカソンに参加する。チーム開発が初めてであったため、コミュニケーションや技術力の差に苦戦しながらもメンバーと協力し合いwebアプリの改修を行う。最終的にチームとしてのコミュニケーション能力が認められ、賞を受賞する。",
  },
  {
    date: "2023.4",
    title: "卒業研究について",
    text: "大学の卒業研究では画像認識を用いた屋内での自己位置推定を行う。画像解析・機械学習などの機能を持つPythonのライブラリであるOpenCVを用いて、撮影された画像から物体検出とPnP問題を利用して、撮影点を推測する研究を行う。",
  },
] as const;

const WORKLIFE_CONTENT: React.ComponentProps<typeof CareerContent>[] = [
  {
    date: "2024.4",
    title: "就職",
    text: "これまでの経験から、プログラマーとして多くの人に影響を与えることができるサービスを開発したいと思い、多岐にわたるサービスを展開する人材系事業会社のwebエンジニアとしてキャリアをスタートする。",
  },
  {
    date: "2025.1～",
    title: "今後は",
    text: "歩みたいキャリアを明確にするために様々なことに挑戦し経験を積み、自分ができること・やりたいことを理解して後悔のない仕事をしたい。そのためにまずは技術的なスキルを身に着け、自分にできることを増やしていきたい。",
  },
] as const;

export const Career: React.FC = () => {
  return (
    <>
      <BasicLayout themeColor="black" id="Career">
        <div className={CareerStyle}>
          <div className={titleStyle}>Career</div>

          <div className={CareerItemStyle}>
            {/* 大学時代 */}
            <div className="flex">
              <CareerIcon />
              <div className={CareerContentStyle}>
                <h3 className={CareerTitleStyle}>University</h3>
                <div>
                  {UNIVERSITY_CONTENT.map((item, index) => (
                    <CareerContent key={index} {...item} />
                  ))}
                </div>
              </div>
            </div>

            {/* 社会人 */}
            <div className="flex">
              <CareerIcon />
              <div className={CareerContentStyle}>
                <h3 className={CareerTitleStyle}>Work Life</h3>
                <div>
                  {WORKLIFE_CONTENT.map((item, index) => (
                    <CareerContent key={index} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </BasicLayout>
    </>
  );
};
