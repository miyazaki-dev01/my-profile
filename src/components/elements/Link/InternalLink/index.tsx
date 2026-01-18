import React from "react";
import Link from "next/link";

type Props = Omit<React.ComponentPropsWithoutRef<typeof Link>, "scroll"> & {
  scroll?: boolean;
};

export function InternalLink({ scroll = false, ...props }: Props) {
  return <Link scroll={scroll} {...props} />;
}
