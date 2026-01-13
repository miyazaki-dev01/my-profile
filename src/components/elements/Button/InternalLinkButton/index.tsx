import { InternalLink } from "@/components/elements/Link/InternalLink";
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
    <InternalLink
      href={href}
      className={`${buttonBase} ${buttonColor[variant]} ${className ?? ""}`}
    >
      <span>{children}</span>
    </InternalLink>
  );
}
