export const META = {
  siteTitle: "Miyazaki's profile",
  siteDescription: "宮﨑貴大のプロフィールサイトです。",
  siteUrl: "https://miyazaki-profile.com",
  siteImage: "/metadata/Miyazaki_profile.png",
  portfolioTitle: "Miyazaki's profile | portfolio",
  portfolioDescription: "ポートフォリオ一覧",
  portfolioListUrl: "https://miyazaki-profile.com/portfolio",
  blogTitle: "Miyazaki's profile | blog",
  blogDescription: "ブログ一覧",
  blogListUrl: "https://miyazaki-profile.com/blog",
} as const satisfies {
  [key: string]: string;
};
