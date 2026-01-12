import { buttonBase, buttonBlack } from "../style.css";

type Props = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export function ExternalLinkButton({ href, className, children }: Props) {
  return (
    <a
      href={href}
      className={`${buttonBase} ${buttonBlack} ${className ?? ""}`}
      target="_blank"
      rel="noreferrer noopener"
    >
      {children}
    </a>
  );
}
