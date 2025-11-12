import React from "react";
import {
  SkillsAndQualificationStyle,
  titleStyle,
  hrStyle,
  contentsStyle,
  contentStyle,
  toolContentStyle,
  qualificationContentStyle,
  qualificationUlStyle,
  toolContentInnerStyle,
} from "./style.css";
import { BasicLayout } from "@/components/TopPage/BasicLayout";
import { SkillContent } from "./SkillContent";
import { Title } from "./Title";
import { ToolContent } from "./Tool";
import { QualificationContent } from "./QualificationContent";

const FRONT_ITEMS: React.ComponentProps<typeof SkillContent>[] = [
  {
    icon: "devicon-html5-plain",
    name: "HTML",
    text: "実務経験･･･0.5年 / 個人開発･･･2年",
  },
  {
    icon: "devicon-css3-plain",
    name: "CSS",
    text: "実務経験･･･0.5年 / 個人開発･･･2年",
  },
  {
    icon: "devicon-javascript-plain",
    name: "JavaScript",
    text: "実務経験･･･0.5年 / 個人開発･･･2年",
  },
  {
    icon: "devicon-typescript-plain",
    name: "TypeScript",
    text: "個人開発･･･0.5年",
  },
  {
    icon: "devicon-react-plain",
    name: "React",
    text: "個人開発･･･0.5年",
  },
  {
    icon: "devicon-nextjs-plain",
    name: "NEXT.js",
    text: "個人開発･･･0.5年",
  },
] as const;

const BACK_ITEMS: React.ComponentProps<typeof SkillContent>[] = [
  {
    icon: "devicon-php-plain",
    name: "PHP",
    text: "実務経験･･･0.5年",
  },
  {
    icon: "devicon-python-plain",
    name: "Python",
    text: "個人開発･･･1.5年",
  },
  {
    icon: "devicon-django-plain",
    name: "Django",
    text: "個人開発･･･1年",
  },
] as const;

const DATABASE_ITEMS: React.ComponentProps<typeof SkillContent>[] = [
  {
    icon: "devicon-mysql-plain",
    name: "MySQL",
    text: "個人開発･･･1年",
  },
  {
    icon: "devicon-postgresql-plain",
    name: "PostgreSQL",
    text: "実務経験･･･0.5年",
  },
] as const;

const INFRASTRUCTURE_ITEMS: React.ComponentProps<typeof SkillContent>[] = [
  {
    icon: "devicon-amazonwebservices-plain",
    name: "AWS",
    text: "comming soon ...",
  },
  {
    icon: "devicon-docker-plain",
    name: "Docker",
    text: "実務経験･･･0.5年 / 個人開発･･･2年",
  },
] as const;

const TOOL_ITEMS: React.ComponentProps<typeof ToolContent>[] = [
  {
    icon: "devicon-git-plain",
    name: "Git",
    image: false,
  },
  {
    icon: "devicon-github-plain",
    name: "GitHub",
    image: false,
  },
  {
    icon: "devicon-vscode-plain",
    name: "VScode",
    image: false,
  },
  {
    icon: "devicon-sourcetree-plain",
    name: "SourceTree",
    image: false,
  },
  {
    icon: "devicon-notion-plain",
    name: "Notion",
    image: false,
  },
  {
    icon: "devicon-figma-plain",
    name: "Figma",
    image: false,
  },
  {
    icon: "devicon-slack-plain",
    name: "Slack",
    image: false,
  },
  {
    icon: "/icon/skillandqualification/teams-icon.svg",
    name: "Teams",
    image: true,
  },
] as const;

const OTHER_ITEMS: React.ComponentProps<typeof SkillContent>[] = [
  {
    icon: "devicon-cplusplus-plain",
    name: "C++",
    text: "競技プログラミング･･･2年",
  },
  {
    icon: "devicon-opencv-plain",
    name: "OpenCV",
    text: "卒業研究･･･1.5年",
  },
] as const;

const QUALIFICATION_CONTENT_TEXT: React.ComponentProps<
  typeof QualificationContent
>[] = [
  {
    text: "普通自動車免許",
  },
  {
    text: "普通自動二輪車免許",
  },
  {
    text: "第四級アマチュア無線技士",
  },
  {
    text: "3級ファイナンシャル・プランニング技能士",
  },
  {
    text: "基本情報技術者試験",
  },
  {
    text: "G検定",
  },
  {
    text: "AWS Certified Cloud Practitioner (2023.3.31取得)",
  },
  {
    text: "AWS Certified Solutions Architect - Associate (2025.6.22取得)",
  },
];

export const SkillsAndQualification: React.FC = () => {
  return (
    <BasicLayout themeColor="white" id="Skills">
      <div className={SkillsAndQualificationStyle}>
        <div className={titleStyle}>Skills</div>

        <div
          className={`hs-accordion-group ${contentsStyle}`}
          data-hs-accordion-always-open=""
        >
          <hr className={hrStyle} />

          {/* フロントエンド */}
          <div className="hs-accordion" id="hs-active-bordered-heading-one">
            <Title title={"Frontend"} />
            <div
              id="hs-basic-active-bordered-collapse-one"
              className={`hs-accordion-content hidden ${contentStyle}`}
              role="region"
              aria-labelledby="hs-active-bordered-heading-one"
            >
              {FRONT_ITEMS.map((item, index) => (
                <SkillContent key={index} {...item} />
              ))}
            </div>
          </div>

          <hr className={hrStyle} />

          {/* バックエンド */}
          <div className="hs-accordion" id="hs-active-bordered-heading-one">
            <Title title={"Backend"} />
            <div
              id="hs-basic-active-bordered-collapse-one"
              className={`hs-accordion-content hidden ${contentStyle}`}
              role="region"
              aria-labelledby="hs-active-bordered-heading-one"
            >
              {BACK_ITEMS.map((item, index) => (
                <SkillContent key={index} {...item} />
              ))}
            </div>
          </div>

          <hr className={hrStyle} />

          {/* データベース */}
          <div className="hs-accordion" id="hs-active-bordered-heading-one">
            <Title title={"DataBase"} />
            <div
              id="hs-basic-active-bordered-collapse-one"
              className={`hs-accordion-content hidden ${contentStyle}`}
              role="region"
              aria-labelledby="hs-active-bordered-heading-one"
            >
              {DATABASE_ITEMS.map((item, index) => (
                <SkillContent key={index} {...item} />
              ))}
            </div>
          </div>

          <hr className={hrStyle} />

          {/* インフラ */}
          <div className="hs-accordion" id="hs-active-bordered-heading-one">
            <Title title={"Infrastructure"} />
            <div
              id="hs-basic-active-bordered-collapse-one"
              className={`hs-accordion-content hidden ${contentStyle}`}
              role="region"
              aria-labelledby="hs-active-bordered-heading-one"
            >
              {INFRASTRUCTURE_ITEMS.map((item, index) => (
                <SkillContent key={index} {...item} />
              ))}
            </div>
          </div>

          <hr className={hrStyle} />

          {/* ツール */}
          <div className="hs-accordion" id="hs-active-bordered-heading-one">
            <Title title={"Tools"} />
            <div
              id="hs-basic-active-bordered-collapse-one"
              className={`hs-accordion-content hidden ${toolContentStyle}`}
              role="region"
              aria-labelledby="hs-active-bordered-heading-one"
            >
              <div className={toolContentInnerStyle}>
                {TOOL_ITEMS.map((item, index) => (
                  <ToolContent key={index} {...item} />
                ))}
              </div>
            </div>
          </div>

          <hr className={hrStyle} />

          {/* その他 */}
          <div className="hs-accordion" id="hs-active-bordered-heading-one">
            <Title title={"Other"} />
            <div
              id="hs-basic-active-bordered-collapse-one"
              className={`hs-accordion-content hidden ${contentStyle}`}
              role="region"
              aria-labelledby="hs-active-bordered-heading-one"
            >
              {OTHER_ITEMS.map((item, index) => (
                <SkillContent key={index} {...item} />
              ))}
            </div>
          </div>

          <hr className={hrStyle} />

          {/* 資格 */}
          <div className="hs-accordion" id="hs-active-bordered-heading-one">
            <Title title={"Qualification"} />
            <div
              id="hs-basic-active-bordered-collapse-one"
              className={`hs-accordion-content hidden ${qualificationContentStyle}`}
              role="region"
              aria-labelledby="hs-active-bordered-heading-one"
            >
              <ul className={qualificationUlStyle}>
                {QUALIFICATION_CONTENT_TEXT.map((item, index) => (
                  <QualificationContent key={index} {...item} />
                ))}
              </ul>
            </div>
          </div>

          <hr className={hrStyle} />
        </div>
      </div>
    </BasicLayout>
  );
};
