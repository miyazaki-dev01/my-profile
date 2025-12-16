export const IMAGES = {
  default_profile: "/images/default_profile.png",
  default_thumbnail: "/images/default_thumbnail.png",
  default_main_article: "/images/default_main_article.png",
} as const satisfies {
  [key: string]: string;
};

export type Images = keyof typeof IMAGES;
