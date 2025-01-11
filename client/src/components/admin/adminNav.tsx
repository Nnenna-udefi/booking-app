"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import logo from "@/assests/images/DC-logo-removebg.png";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: 1, text: "Dashboard", href: "/admin" },
  { id: 2, text: "Edit Services", href: "/admin/edit" },
  { id: 3, text: "Add Services", href: "/admin/add" },
  { id: 4, text: "Settings", href: "/settings" },
];

export const AdminNav = () => {
  const pathname = usePathname();
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className=" text-lg justify-between items-center md:py-5 py-3 md:px-8 px-4 bg-white">
      <div className="fixed md:block hidden left-0 top-0 w-[180px] bg-white pl-4 h-full text-gray-700 border-r border-r-gray-700  ease-in-out duration-500">
        <Image src={logo} alt="logo" className="w-32 mt-4" />

        <ul className="gap-2">
          {navItems.map((items) => {
            const isActive = pathname === items.href;
            return (
              <li
                key={items.id}
                className={`${
                  isActive
                    ? `p-2 bg-green-500 text-white  text-uppercase `
                    : `px-2 py-4`
                }`}
              >
                {" "}
                <Link href={items.href}>{items.text}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {nav ? (
          <X
            size={20}
            className="text-black cursor-pointer right-0 mx-2 fixed"
          />
        ) : (
          <Menu size={20} />
        )}
      </div>
      <ul
        className={
          nav
            ? "fixed md:hidden z-auto left-0 top-0 w-[30%]  p-4 h-full text-gray-700 border-r border-r-gray-700 bg-white ease-in-out duration-500"
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
          <li
            key={item.id}
            className="hover:text-pnk hover:font-bold py-2 text-sm"
          >
            <Link href={item.href}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
