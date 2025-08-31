"use client";

import { NavigationItemProps } from "@/components/sections/Header/components/Navegation/NavigationItem";
import { usePathname } from "next/navigation";

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
