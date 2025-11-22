export const META = {
  siteTitle: "Miyazaki's profile",
  siteDescription: "宮﨑貴大のプロフィールサイトです。",
  siteUrl: "https://profileofmiyazaki.com",
  siteImage: "/metadata/Miyazaki_profile.png",
  portfolioTitle: "Miyazaki's profile | portfolio",
  portfolioDescription: "ポートフォリオ一覧",
  portfolioListUrl: "https://profileofmiyazaki.com/portfolio",
  blogTitle: "Miyazaki's profile | blog",
  blogDescription: "ブログ一覧",
  blogListUrl: "https://profileofmiyazaki.com/blog",
} as const satisfies {
  [key: string]: string;
};
