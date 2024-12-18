"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import logo from "@/assests/images/DC-logo-removebg.png";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: 1, text: "Home", href: "/" },
  { id: 2, text: "About", href: "/about" },
  { id: 3, text: "Our Services", href: "/services" },
  { id: 4, text: "Contact Us", href: "/contact" },
];

export const Nav = () => {
  const pathname = usePathname();
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex text-lg justify-between items-center py-5 px-8 bg-white">
      <Image src={logo} alt="logo" className="w-32" />

      <ul className="md:flex hidden gap-6 ">
        {navItems.map((items) => {
          const isActive = pathname === items.href;
          return (
            <li
              key={items.id}
              className={`${
                isActive
                  ? `bg-pink-300 italic text-pink-800 p-2 text-uppercase no-underline`
                  : `p-2 underline`
              }`}
            >
              {" "}
              <Link href={items.href}>{items.text}</Link>
            </li>
          );
        })}
      </ul>
      <Link href="/booking" className="md:block hidden">
        <button className="bg-black text-white px-3 py-2 rounded-md">
          Book Now
        </button>
      </Link>

      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {nav ? (
          <X size={20} className="text-black fixed" />
        ) : (
          <Menu size={20} />
        )}
      </div>
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] pl-4 h-full text-gray-700 border-r border-r-gray-700 bg-white ease-in-out duration-500"
            : "ease-in-out w-[60%]   duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        <Image
          src={logo}
          alt="logo"
          width={200}
          height={100}
          className="w-20"
        />

        {navItems.map((item) => (
          <li key={item.id} className="hover:text-pnk hover:font-bold py-2">
            <Link href={item.href}>{item.text}</Link>
          </li>
        ))}

        <Link href="/booking">
          <button className="bg-black text-white px-3 mt-10 py-2 rounded-md">
            Book Now
          </button>
        </Link>
      </ul>
    </div>
  );
};
