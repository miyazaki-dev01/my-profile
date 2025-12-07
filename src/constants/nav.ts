import { PAGES, type PageKey } from "./pages";

export type NavPattern = PageKey;

export interface NavItem {
  label: string;
  path: string;
}

export const NAV_ITEM = {
  profile: {
    label: PAGES.profile.title,
    path: PAGES.profile.path,
  },
  portfolio: {
    label: PAGES.portfolio.title,
    path: PAGES.portfolio.path,
  },
  blog: {
    label: PAGES.blog.title,
    path: PAGES.blog.path,
  },
  skill: {
    label: PAGES.skill.title,
    path: PAGES.skill.path,
  },
  career: {
    label: PAGES.career.title,
    path: PAGES.career.path,
  },
  contact: {
    label: PAGES.contact.title,
    path: PAGES.contact.path,
  },
} as const satisfies Record<NavPattern, NavItem>;
