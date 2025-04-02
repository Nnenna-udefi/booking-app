import React from "react";
import { ServicesCard } from "./services/servicesCard";
import Image from "next/image";
import img5 from "@/assests/images/ghana.jpg";
import logo from "@/assests/images/DC-logo-removebg.png";
import { Gift, HandHeartIcon, TreeDeciduousIcon } from "lucide-react";
import Link from "next/link";
import lbraids from "@/assests/images/loose-braids.jpeg";
import cornrows from "@/assests/images/cornrows-ponytail.jpeg";
import sbraids from "@/assests/images/Stitch braids.jpeg";

export const HomeSection = () => {
  return (
    <div className="font-poppins">
      <div className="pt-10 bg-white flex items-center justify-center">
        {/* <Image src={logo} alt="braids" width={500} height={500} className=" " /> */}
        <Image
          src={lbraids}
          alt="braids"
          width={500}
          height={500}
          className=" md:h-[500px] h-[200px] md:w-[400px] w-full"
        />
        <Image
          src={cornrows}
          alt="braids"
          width={500}
          height={500}
          className=" md:h-[500px] h-[200px] md:w-[400px] w-full "
        />
        <Image
          src={sbraids}
          alt="braids"
          width={500}
          height={500}
          className=" h-[500px] hidden md:block"
        />
      </div>

      <div className="block md:flex justify-between bg-[#5936ae] gap-10 text-white p-12 items-center">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl uppercase font-bold font-philosopher">
            Welcome to DC Hair Braiding
          </h1>
          <Image
            src="https://saranbraid.com/wp-content/themes/saran-african-hair-brading/images/head-tag.png"
            alt="heading"
            width={300}
            height={300}
            className="d-block mx-auto"
          />
          <p className="my-2">
            This is one of the premier hair braiding salons in Maryland,
            frequented not only by women but by men and kids as well.
          </p>
          <p className="mb-6">
            Our hair salon has earned an incredible reputation as our
            professional team of hair braiding stylists continues to work
            wonders on clients’ hair and enhance their assets through our
            services.
          </p>
          <Link href="/about">
            <button className="text-[16px] hover:scale-105 transformation-all duration-300 hover:text-white hover:bg-black text-black bg-white py-2 px-6 rounded-md">
              View More
            </button>
          </Link>
        </div>
        <Image
          src={img5}
          alt="braids"
          width={500}
          height={500}
          className="h-[300px] md:h-[400px] w-full md:mt-0 mt-4 md:w-[400px] rounded-full"
        />
      </div>

      <div className="md:flex block gap-6 justify-between bg-black p-12">
        <div className="mt-2 p-6 rounded-lg transformation-all duration-300 hover:scale-105 bg-gray-100 shadow-md flex flex-col items-center justify-center gap-4">
          <Gift size={40} className="text-[#c4a82f]" />
          <h2 className="text-xl uppercase font-bold my-2">Friendly Team</h2>
          <p>
            Our staff is polite and courteous. We strive for excellence both in
            the quality of our services and interaction with you.
          </p>
        </div>
        <div className="mt-2 p-6 rounded-lg transformation-all duration-300 hover:scale-105 bg-gray-100 shadow-md flex flex-col items-center justify-center gap-4">
          <HandHeartIcon size={40} className="text-[#c4a82f]" />
          <h2 className="text-xl uppercase font-bold my-2">Best Hands</h2>
          <p>
            We use the best hands and products to deliver the highest level of
            hair braiding services to our clients.
          </p>
        </div>
        <div className="mt-2 p-6 rounded-lg transformation-all duration-300 hover:scale-105 bg-gray-100 shadow-md flex flex-col items-center justify-center gap-4">
          <TreeDeciduousIcon size={40} className="text-[#c4a82f]" />
          <h2 className="text-xl uppercase font-bold my-2">
            Perfect Atmosphere
          </h2>
          <p>
            When you come to DC Hair Braiding, you are welcome to experience the
            warm and friendly atmosphere of our salon.
          </p>
        </div>
      </div>
      <div className="p-8 bg-[#5936ae]">
        <ServicesCard />
      </div>
    </div>
  );
};
