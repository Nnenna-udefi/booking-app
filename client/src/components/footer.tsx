import React from "react";
import {
  Copyright,
  Facebook,
  Instagram,
  Locate,
  Mail,
  Phone,
} from "lucide-react";
import Logo from "@/assests/images/logo-3.png";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-black/90 font-poppins text-lg md:text-xl">
      <div className=" p-8 flex md:flex-row flex-col items-center justify-between gap-10 text-white">
        <div>
          <Image src={Logo} alt="logo" width={300} height={300} priority />
        </div>
        <div>
          <p className="w-full md:w-[60%]">
            Make an Appointment with Us Today!
          </p>

          <Link href="/booking">
            <button className="border-b border-black text-white pb-2 hover:text-2xl mt-4  text-xl ">
              Book Now
            </button>
          </Link>
        </div>
        <div className="flex flex-col  items-center text-center">
          <div className="flex flex-col py-3 gap-4">
            <p className="flex items-center gap-2">
              <Mail /> dcbraids@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <Phone /> +23444566667
            </p>
            <p className="flex items-center gap-2">
              <Locate /> 2, hosure, Queens London
            </p>
          </div>
        </div>
      </div>
      <div className="py-4 items-center justify-center text-white border-t border-white flex gap-2">
        <Copyright />
        <p>DCHairs 2024</p>

        <div className="flex gap-10 ml-10 text-yellow-200 ">
          <Facebook />
          <Instagram />
        </div>
      </div>
    </div>
  );
};
