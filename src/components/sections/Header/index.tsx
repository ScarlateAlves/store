import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, User, Heart, Menu } from "lucide-react";
import { Navigation } from "./components/Navegation";
import { Drawer } from "@/components/ui/Drawer";

export const Header = () => {
  return (
    <header className="border-b border-gray-400 px-4">
      <div className="flex max-w-7xl m-auto justify-around items-center">
        <Link href="/">
          <Image
            className="object-contain"
            src="/logo.png"
            alt="Next.js logo"
            width={80}
            height={60}
          />
        </Link>
        <div className="hidden md:block">
          <Navigation />
        </div>

        <div className="flex gap-6">
          <Heart />
          <ShoppingCart />
          <User />
          <div className="md:hidden">
            <Drawer label={<Menu />}>
              <Navigation />
            </Drawer>
          </div>
        </div>
      </div>
    </header>
  );
};
