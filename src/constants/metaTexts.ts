import { PATH } from "@/constants/paths";
import { PAGES } from "@/constants/pages";

export const META_TEXT = {
  root: {
    title: "PROFILE OF MIYAZAKI official website",
    titleTemplate: "%s | PROFILE OF MIYAZAKI official website",
    description: "PROFILE OF MIYAZAKI オフィシャルサイト",
    defaultImage: "/meta/default_meta.png",
    icons: {
      icon: "/favicon.ico",
    },
  },
  pages: {
    profile: {
      title: PAGES.profile.title,
      description: "PROFILE OF MIYAZAKI オフィシャルサイト",
      path: PATH.profile,
    },
    portfolio: {
      title: PAGES.portfolio.title,
      description: "ポートフォリオ一覧",
      path: PATH.portfolio,
    },
    blog: {
      title: PAGES.blog.title,
      description: "ブログ一覧",
      path: PATH.blog,
    },
    skill: {
      title: PAGES.skill.title,
      description: "スキル一覧",
      path: PATH.skill,
    },
    career: {
      title: PAGES.career.title,
      description: "キャリア",
      path: PATH.career,
    },
    contact: {
      title: PAGES.contact.title,
      description: "お問い合わせフォーム",
      path: PATH.contact,
    },
    contactConfirm: {
      title: PAGES.contact.title,
      description: "お問い合わせ内容の確認",
      path: PATH.contactConfirm,
      noindex: true,
    },
    contactComplete: {
      title: PAGES.contact.title,
      description: "お問い合わせ完了",
      path: PATH.contactComplete,
      noindex: true,
    },
  },
  fallback: {
    portfolioListDescription: "ポートフォリオ一覧",
    blogListDescription: "ブログ一覧",
  },
} as const;
