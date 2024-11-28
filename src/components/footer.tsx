import React from "react";
import { Copyright } from "lucide-react";

export const Footer = () => {
  return (
    <div className="bg-black p-8 flex flex-col justify-between items-center text-center text-white">
      <div className="md:flex block gap-6">
        <p>Email Address: dcbraids@gmail.com</p>
        <p>Phone Number: +23444566667</p>
        <p>Address: 2, ho sure, Queens London</p>
      </div>
      <div className="my-4 flex gap-2">
        <Copyright />
        <p>DCHairs 2024</p>
      </div>
    </div>
  );
};
