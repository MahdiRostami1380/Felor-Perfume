"use client";

import Link from "next/link";
import { NavItems } from "../data";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="section-container">
      <div className="flex justify-between items-center select-none">
        <div className="font-DaniloCatalina text-4xl bg-[linear-gradient(to_bottom,#AB572D,#A5470F,#EC9A52,#AB5829)] inline text-transparent bg-clip-text">
          <Link href={"/"}>Felor</Link>
        </div>
        <nav className="hidden md:flex gap-6 lg:gap-12">
          {NavItems.map((item) => (
            <div
              key={item.title}
              className={`transition ${
                pathname === item.link
                  ? "text-[#AB572D]"
                  : "hover:text-[#AB572D]"
              }`}
            >
              <Link href={item.link}>{item.title}</Link>
            </div>
          ))}
        </nav>
        <div className="flex gap-2 md:gap-3 lg:gap-6">
          <div>
            <img
              src="./Images/NavIcons/hamburger.svg"
              alt="hamburger menu"
              className="size-6 md:hidden"
            />
          </div>
          <div>
            <img
              src="./Images/NavIcons/magnify.svg"
              alt="magnify"
              className="size-6"
            />
          </div>
          <div>
            <img
              src="./Images/NavIcons/user.svg"
              alt="user"
              className="size-6"
            />
          </div>
          <div>
            <img
              src="./Images/NavIcons/heart.svg"
              alt="heart"
              className="size-6"
            />
          </div>
          <div>
            <img
              src="./Images/NavIcons/cart.svg"
              alt="cart"
              className="size-6"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
