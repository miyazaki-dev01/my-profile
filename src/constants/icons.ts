import type { FC, SVGProps } from "react";

import X from "@public/icons/x.svg";
import GITHUB from "@public/icons/github.svg";
import ATCODER from "@public/icons/atcoder.svg";
import FACEBOOK from "@public/icons/facebook.svg";
import HATENA from "@public/icons/hatena.svg";

type IconComponent = FC<SVGProps<SVGSVGElement>>;

export const ICONS = {
  X,
  GITHUB,
  ATCODER,
  FACEBOOK,
  HATENA,
} satisfies Record<string, IconComponent>;

export type IconName = keyof typeof ICONS;
