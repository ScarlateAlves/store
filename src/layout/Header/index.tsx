import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, User, Heart } from "lucide-react";
import { Navigation } from "./components/Navegation";
import { Search } from "@/features/Search";

export const Header = () => {
  return (
    <header className="border-b border-gray-400 mx-4">
      <div className="flex max-w-7xl m-auto justify-between items-center">
        <Link href="/">
          <Image
            className="object-contain"
            src="/logo.png"
            alt="Next.js logo"
            width={80}
            height={60}
          />
        </Link>
        <Navigation />
        <div className="flex gap-6">
          <Search />
          <Heart />
          <ShoppingCart />
          <User />
        </div>
      </div>
    </header>
  );
};
