import { NavLink } from "@/components/elements/Link/NavLink";

type Props = {
  href: string;
  label: string;
  onClick: () => void;
};

export function HeaderNavItem({ href, label, onClick }: Props) {
  return (
    <li>
      <NavLink href={href} onClick={onClick}>
        {label}
      </NavLink>
    </li>
  );
}
