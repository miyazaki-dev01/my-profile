export const PATH = {
  home: "/",
  portfolio: "/portfolio",
  blog: "/blog",
  notFound: "/404",
} as const satisfies {
  [key: string]: string;
};
