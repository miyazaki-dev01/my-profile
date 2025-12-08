import React from "react";
import Image from "next/image";
import type { ProfileData } from "@/features/profile/types/profileData";
import { PageTitle } from "@/components/elements/PageTitle";
import { PAGES } from "@/constants/pages";
import { ExternalLink } from "@/components/elements/ExternalLink";
import { Icon } from "@/components/elements/Icon";
import { URL } from "@/constants/urls";
import * as styles from "./style.css";

type ProfilePageProps = {
  profileData: ProfileData;
};

export function ProfilePage({ profileData }: ProfilePageProps) {
  const { profileImage, jobCategory, nameEn, nameJa, selfIntroduction } =
    profileData;

  return (
    <div className={styles.root}>
      <PageTitle>{PAGES.profile.title}</PageTitle>

      <div className={styles.layout}>
        {/* プロフィール画像 */}
        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            <Image src={profileImage.url} alt="" fill sizes="100vw" priority />
          </div>
        </div>

        {/* 自己紹介 */}
        <div className={styles.contentColumn}>
          <div className={styles.content}>
            <div className={styles.contentBlock}>
              <p className={styles.jobCategory}>{jobCategory}</p>
              <h2 className={styles.nameEn}>{nameEn}</h2>
              <p className={styles.nameJa}>{nameJa}</p>
            </div>
            <div
              className={styles.selfIntroduction}
              dangerouslySetInnerHTML={{ __html: selfIntroduction }}
            ></div>
          </div>

          {/* SNSリンク */}
          <div className={styles.externalLinkContainer}>
            <ExternalLink href={URL.x}>
              <Icon name="X" size={24} />
            </ExternalLink>
            <ExternalLink href={URL.github}>
              <Icon name="GITHUB" size={26} />
            </ExternalLink>
            <ExternalLink href={URL.atcoder}>
              <Icon name="ATCODER" size={32} />
            </ExternalLink>
          </div>
        </div>
      </div>
    </div>
  );
}
