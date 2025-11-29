export const PATH = {
  profile: "/",
  portfolio: "/portfolio",
  blog: "/blog",
  skill: "/skill",
  career: "/career",
  contact: "/contact",
  contactConfirm: "/contact/confirm",
  contactComplete: "/contact/complete",
  notFound: "/404",
} as const satisfies {
  [key: string]: string;
};
