import Link from "next/link";
import { tv } from "tailwind-variants";

const linkVariant = tv({
  slots: {
    base: "border-b-2 hover:border-[#DB4444] transition-colors border-white",
  },
  variants: {
    isActive: {
      true: {
        base: "border-[#DB4444]",
      },
    },
  },
});

export interface NavigationItemProps {
  id: string;
  label: string;
  href: string;
  isActive?: boolean;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  label,
  href,
  isActive,
}) => {
  const { base } = linkVariant({ isActive });
  return (
    <div className={base()}>
      <Link href={href}>{label}</Link>
    </div>
  );
};
