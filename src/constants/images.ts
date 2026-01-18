export const IMAGES = {
  default_square: "/images/default_square.png",
  default_thumb: "/images/default_thumb.png",
  default_hero: "/images/default_hero.png",
} as const satisfies {
  [key: string]: string;
};

export type Images = keyof typeof IMAGES;
