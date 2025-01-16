import React from "react";
import { Copyright, Facebook, Instagram } from "lucide-react";
import Logo from "@/assests/images/logo-3.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="bg-gray-700 p-8 flex flex-col justify-center items-center text-center text-white">
      <div className="w-[200px]">
        <Image src={Logo} alt="logo" width={100} height={100} priority />
      </div>
      <div className="md:flex block my-3 gap-6">
        <p>Email Address: dcbraids@gmail.com</p>
        <p>Phone Number: +23444566667</p>
        <p>Address: 2, ho sure, Queens London</p>
      </div>
      <div className="flex gap-10 my-3">
        <Facebook />
        <Instagram />
      </div>
      <div className="my-4 flex gap-2">
        <Copyright />
        <p>DCHairs 2024</p>
      </div>
    </div>
  );
};
