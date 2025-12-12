export const IMAGES = {
  default_thumbnail: "/images/default_thumbnail.png",
} as const satisfies {
  [key: string]: string;
};

export type Images = keyof typeof IMAGES;
