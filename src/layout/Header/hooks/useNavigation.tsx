"use client";

import { usePathname } from "next/navigation";
import { NavigationItemProps } from "../components/Navegation/NavigationItem";

export const useNavigation = (items: NavigationItemProps[]) => {
  const pathname = usePathname();

  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const getNavigationItems = () => {
    return items.map((item) => ({
      ...item,
      isActive: isActiveRoute(item.href),
    }));
  };

  return {
    navigationItems: getNavigationItems(),
  };
};
