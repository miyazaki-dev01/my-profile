import { SITE_CONFIG } from "@/constants/site";
import { PATH } from "@/constants/paths";
import { PAGES } from "@/constants/pages";

export const META_TEXT = {
  root: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    defaultImage: "/meta/default_meta.png",
    icons: {
      icon: "/favicon.ico",
    },
  },
  pages: {
    profile: {
      title: `${PAGES.profile.title} | ${SITE_CONFIG.title}`,
      description: SITE_CONFIG.description,
      path: PATH.profile,
    },
    portfolio: {
      title: `${PAGES.portfolio.title} | ${SITE_CONFIG.title}`,
      description: "ポートフォリオ一覧",
      path: PATH.portfolio,
    },
    blog: {
      title: `${PAGES.blog.title} | ${SITE_CONFIG.title}`,
      description: "ブログ一覧",
      path: PATH.blog,
    },
    skill: {
      title: `${PAGES.skill.title} | ${SITE_CONFIG.title}`,
      description: "スキル一覧",
      path: PATH.skill,
    },
    career: {
      title: `${PAGES.career.title} | ${SITE_CONFIG.title}`,
      description: "キャリア",
      path: PATH.career,
    },
    contact: {
      title: `${PAGES.contact.title} | ${SITE_CONFIG.title}`,
      description: "お問い合わせフォーム",
      path: PATH.contact,
    },
    contactConfirm: {
      title: `${PAGES.contact.title} | ${SITE_CONFIG.title}`,
      description: "お問い合わせ内容の確認",
      path: PATH.contactConfirm,
      noindex: true,
    },
    contactComplete: {
      title: `${PAGES.contact.title} | ${SITE_CONFIG.title}`,
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
