import { SITE_CONFIG } from "@/constants/site";

export const URL = {
  appRoot: SITE_CONFIG.url,
  x: "https://x.com/miyazaki_dev01",
  github: "https://github.com/miyazaki-dev01",
  atcoder: "https://atcoder.jp/users/MiyazakiTakahiro",
} as const satisfies {
  [key: string]: string;
};
