import { PATH } from "./paths";

export type PageKey =
  | "profile"
  | "portfolio"
  | "blog"
  | "skill"
  | "career"
  | "contact";

export interface PageInfo {
  title: string;
  path: string;
}

export const PAGES = {
  profile: {
    title: "PROFILE",
    path: PATH.profile,
  },
  portfolio: {
    title: "PORTFOLIO",
    path: PATH.portfolio,
  },
  blog: {
    title: "BLOG",
    path: PATH.blog,
  },
  skill: {
    title: "SKILL",
    path: PATH.skill,
  },
  career: {
    title: "CAREER",
    path: PATH.career,
  },
  contact: {
    title: "CONTACT",
    path: PATH.contact,
  },
} as const satisfies Record<PageKey, PageInfo>;
