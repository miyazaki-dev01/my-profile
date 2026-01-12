import Link from "next/link";
import { buttonBase, buttonColor } from "../style.css";

type Props = {
  variant?: keyof typeof buttonColor;
  href: string;
  className?: string;
  children: React.ReactNode;
};

export function InternalLinkButton({
  variant = "black",
  href,
  className,
  children,
}: Props) {
  return (
    <Link
      href={href}
      scroll={false}
      className={`${buttonBase} ${buttonColor[variant]} ${className ?? ""}`}
    >
      <span>{children}</span>
    </Link>
  );
}
