"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import logo from "@/assests/images/DC-logo-removebg.png";
import Image from "next/image";

const navItems = [
  { id: 1, text: "Home", href: "/" },
  { id: 2, text: "About", href: "/about" },
  { id: 3, text: "Our Services", href: "/services" },
  { id: 4, text: "Contact Us", href: "/contact" },
];

export const Nav = () => {
  const pathname = usePathname();
  return (
    <div className="flex text-lg justify-between items-center py-5 px-8 bg-white">
      <Image src={logo} alt="logo" className="w-32" />
      <ul className="flex gap-6 ">
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
      <Link href="/booking">
        <button className="bg-black text-white px-3 py-2 rounded-md">
          Book Now
        </button>
      </Link>
    </div>
  );
};
