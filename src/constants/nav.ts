import { PATH } from "./paths";

export type NavPattern =
  | "profile"
  | "portfolio"
  | "blog"
  | "skill"
  | "career"
  | "contact";

export interface NavItem {
  lavel: string;
  path: string;
}

export const NAV_ITEM = {
  profile: {
    lavel: "PROFILE",
    path: PATH.profile,
  },
  portfolio: {
    lavel: "PORTFOLIO",
    path: PATH.portfolio,
  },
  blog: {
    lavel: "BLOG",
    path: PATH.blog,
  },
  skill: {
    lavel: "SKILL",
    path: PATH.skill,
  },
  career: {
    lavel: "CAREER",
    path: PATH.career,
  },
  contact: {
    lavel: "CONTACT",
    path: PATH.contact,
  },
} as const satisfies {
  [key in NavPattern]: NavItem;
};
