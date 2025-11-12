import React from "react";
import Image from "next/image";
import {
  TopContentStyle,
  imageStyle,
  descriptionStyle,
  occupationStyle,
  nameStyle,
  explanatoryStyle,
  linkStyle,
  mailStyle,
  mail_IconStyle,
} from "./style.css";
import { BasicLayout } from "../BasicLayout";
import { IconLink } from "./IconLink";
import { TopContentProps } from "../../../types/topContent";

const ICON_ITEMS: React.ComponentProps<typeof IconLink>[] = [
  {
    href: "https://x.com/miyazaki_dev01",
    alt: "X",
    src: "/icon/topcontent/x.svg",
  },
  {
    href: "https://github.com/miyazaki-dev01",
    alt: "GitHub",
    src: "/icon/topcontent/github.svg",
  },
  {
    href: "https://atcoder.jp/users/MiyazakiTakahiro",
    alt: "AtCoder",
    src: "/icon/topcontent/at-coder.svg",
    size: "medium",
  },
] as const;

export const TopContent = ({ topData }: { topData: TopContentProps }) => {
  return (
    <BasicLayout id="Home" themeColor="white">
      <div className={TopContentStyle}>
        {/* プロフィール画像 */}
        <div>
          <Image
            src={topData?.image.url ?? "/theme/comming_soon.png"}
            alt="Features Image"
            width={topData?.image.width ?? 800}
            height={topData?.image.height ?? 500}
            unoptimized
            className={imageStyle}
            priority
          />
        </div>

        {/* ディスクリプション */}
        <div className={descriptionStyle}>
          <div>
            {topData && (
              <>
                <p className={occupationStyle}>{topData?.job_category}</p>
                <h2 className={nameStyle}>{topData?.name}</h2>
                <div
                  className={explanatoryStyle}
                  dangerouslySetInnerHTML={{ __html: topData?.description }}
                />
              </>
            )}
          </div>

          {/* リンク */}
          <div className={linkStyle}>
            {ICON_ITEMS.map((item, index) => (
              <IconLink key={index} {...item} />
            ))}
            <a href="#Contact" className={mailStyle}>
              <img
                src="/icon/topcontent/mail.svg"
                alt="mail"
                className={mail_IconStyle}
              />
            </a>
          </div>
        </div>
      </div>
    </BasicLayout>
  );
};
