import { PATH } from "./paths";

export type NavPattern =
  | "profile"
  | "portfolio"
  | "blog"
  | "skill"
  | "career"
  | "contact";

export interface NavItem {
  label: string;
  path: string;
}

export const NAV_ITEM = {
  profile: {
    label: "PROFILE",
    path: PATH.profile,
  },
  portfolio: {
    label: "PORTFOLIO",
    path: PATH.portfolio,
  },
  blog: {
    label: "BLOG",
    path: PATH.blog,
  },
  skill: {
    label: "SKILL",
    path: PATH.skill,
  },
  career: {
    label: "CAREER",
    path: PATH.career,
  },
  contact: {
    label: "CONTACT",
    path: PATH.contact,
  },
} as const satisfies {
  [key in NavPattern]: NavItem;
};
