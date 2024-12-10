import React from "react";
import { ServicesCard } from "./services/servicesCard";
import Image from "next/image";
import img5 from "@/assests/images/ghana.jpg";
import logo from "@/assests/images/DC-logo.png";
import { Gift, HandHeartIcon, TreeDeciduousIcon } from "lucide-react";
import Link from "next/link";

export const HomeSection = () => {
  return (
    <div>
      <div className="py-10 bg-white flex items-center justify-center">
        <Image src={logo} alt="braids" width={500} height={500} className=" " />
      </div>

      <div className="flex justify-between bg-gray-800 gap-10 text-white p-12 items-center">
        <Image
          src={img5}
          alt="braids"
          width={500}
          height={500}
          layout="responsive"
          className="h-[500px]"
        />
        <div className="text-xl">
          <p className="my-2">
            DC Hair Braiding is one of the premier hair braiding salons in
            Maryland, frequented not only by women but by men and kids as well.
          </p>
          <p className="mb-6">
            Our hair salon has earned an incredible reputation as our
            professional team of hair braiding stylists continues to work
            wonders on clients’ hair and enhance their assets through our
            services.
          </p>
          <Link href="/about">
            <button className="text-[16px] hover:text-white hover:bg-black text-black bg-white p-2 rounded-md">
              View More
            </button>
          </Link>
        </div>
      </div>

      <div className="md:flex block gap-6 justify-between p-12">
        <div>
          <Gift size={40} />
          <h2 className="text-xl uppercase font-bold my-2">Friendly Team</h2>
          <p>
            Our staff is polite and courteous. We strive for excellence both in
            the quality of our services and interaction with you.
          </p>
        </div>
        <div>
          <HandHeartIcon size={40} />
          <h2 className="text-xl uppercase font-bold my-2">Best Hands</h2>
          <p>
            We use the best hands and products to deliver the highest level of
            hair braiding services to our clients.
          </p>
        </div>
        <div>
          <TreeDeciduousIcon size={40} />
          <h2 className="text-xl uppercase font-bold my-2">
            Perfect Atmosphere
          </h2>
          <p>
            When you come to DC Hair Braiding, you are welcome to experience the
            warm and friendly atmosphere of our salon.
          </p>
        </div>
      </div>
      <div className="p-8">
        <ServicesCard />
      </div>
    </div>
  );
};
