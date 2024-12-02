import React from "react";
import { ServicesCard } from "./services/servicesCard";
import img1 from "@/assests/images/big-box-braids.jpg";
import img2 from "@/assests/images/box-braids.jpg";
import img3 from "@/assests/images/goddess-braids.jpg";
import img4 from "@/assests/images/half-conrows.jpg";
import Image from "next/image";

export const HomeSection = () => {
  return (
    <div>
      <div className="flex flex-wrap">
        <Image src={img1} alt="braids" className="w-1/4 " />
        <Image src={img2} alt="braids" className="w-1/4 " />
        <Image src={img3} alt="braids" className="w-1/4 " />
        <Image src={img4} alt="braids" className="w-1/4 " />
      </div>
      <div className="p-8">
        <ServicesCard />
      </div>
    </div>
  );
};
