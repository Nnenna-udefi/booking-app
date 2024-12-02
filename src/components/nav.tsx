"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  { id: 1, text: "Home", href: "/" },
  { id: 2, text: "About", href: "/about" },
  { id: 3, text: "Our Services", href: "/services" },
  { id: 4, text: "Contact Us", href: "/contact-us" },
];

export const Nav = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-between items-center py-5 px-8 bg-white">
      <h1 className="italic text-xl font-bold ">DC</h1>
      <ul className="flex gap-6 underline">
        {navItems.map((items) => {
          const isActive = pathname === items.href;
          return (
            <li
              key={items.id}
              className={`${
                isActive ? `text-uppercase font-bold no-underline` : ``
              }`}
            >
              {" "}
              <Link href={items.href}>{items.text}</Link>
            </li>
          );
        })}
      </ul>
      <button className="bg-black text-white px-3 py-2 rounded-md">
        <Link href="/booking">Book Now</Link>
      </button>
    </div>
  );
};
