"use client";

import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import CartPopup from "../ui/cart-popup";
import { useState } from "react";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { usePathname } from "next/navigation";

const Header = () => {
  const { items } = useCartStore();
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Category", href: "/category" },
    { name: "Our Product", href: "/products" },
  ];

  return (
    <header className="fixed w-full z-20 backdrop-blur-xl bg-white/50">
      <div className="container mx-auto py-7 flex justify-between gap-10">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="sporton logo"
            width={127}
            height={30}
          />
        </Link>
        <nav className="flex gap-44 font-medium">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                // 2. Pastikan ada class warna teks (text-black atau text-gray)
                className={`relative text-lg font-medium transition-all duration-300 ${
                  isActive ? "text-primary" : "text-gray-600 hover:text-primary"
                } 
            /* Bagian Garis (Pseudo-element) */
            after:content-[''] after:block after:bg-primary after:rounded-full after:h-0.75 after:w-1/2 
            after:absolute after:left-1/2 after:-translate-x-1/2 after:top-full after:mt-1
            after:transition-transform after:duration-300
            ${isActive ? "after:scale-x-100" : "after:scale-x-0"}`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="relative flex gap-10">
          <FiSearch size={24} />
          <div
            className="relative cursor-pointer"
            onClick={() => setIsCartPopupOpen(!isCartPopupOpen)}
          >
            <FiShoppingBag size={24} />
            {items.length ? (
              <div className="bg-primary rounded-full w-3.5 h-3.5 absolute -top-1 -right-1 text-[9px] text-white text-center">
                {items.length}
              </div>
            ) : (
              <></>
            )}
          </div>
          {isCartPopupOpen && <CartPopup />}
        </div>
      </div>
    </header>
  );
};

export default Header;
