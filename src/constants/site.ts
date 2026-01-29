export const SITE_CONFIG = {
  name: "PROFILE OF MIYAZAKI",
  person: "TAKAHIRO MIYAZAKI",
  title: "PROFILE OF MIYAZAKI official website",
  description: "PROFILE OF MIYAZAKI オフィシャルサイト",
  url: "https://profileofmiyazaki.com",
} as const;

export type SiteConfig = typeof SITE_CONFIG;
