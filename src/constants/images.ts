type SvgPath = `/${string}.svg`;

type IconPattern = "x" | "github" | "atcoder" | "facebook" | "hatena";

export const IMAGES = {
  logo: "/logo.svg",
  icons: {
    x: "/icons/x.svg",
    github: "/icons/github.svg",
    atcoder: "/icons/atcoder.svg",
    facebook: "/icons/facebook.svg",
    hatena: "/icons/hatena.svg",
  },
} as const satisfies {
  logo: SvgPath;
  icons: Record<IconPattern, SvgPath>;
};
