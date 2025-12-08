import type { FC, SVGProps } from "react";

import X from "@public/icons/x.svg";
import GITHUB from "@public/icons/github.svg";
import ATCODER from "@public/icons/atcoder.svg";

type IconComponent = FC<SVGProps<SVGSVGElement>>;

export const ICONS = {
  X,
  GITHUB,
  ATCODER,
} satisfies Record<string, IconComponent>;

export type IconName = keyof typeof ICONS;
