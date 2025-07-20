"use client";

import { useNavigation } from "../../hooks/useNavigation";
import { NavigationItem, NavigationItemProps } from "./NavigationItem";

export const DEFAULT_NAVIGATION_ITEMS: NavigationItemProps[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "products", label: "Produtos", href: "/products" },
  { id: "about", label: "Sobre", href: "/about" },
  { id: "contact", label: "Contato", href: "/contact" },
];

export const Navigation = () => {
  const { navigationItems } = useNavigation(DEFAULT_NAVIGATION_ITEMS);
  return (
    <nav className="flex gap-6">
      {navigationItems.map((item) => (
        <NavigationItem key={item.id} {...item} />
      ))}
    </nav>
  );
};
