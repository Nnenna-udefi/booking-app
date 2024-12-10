import { BookingSection } from "@/utils/constants";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export const ServicesCard = () => {
  return (
    <div>
      <h2 className="text-center underline uppercase font-bold text-3xl">
        Our Services
      </h2>
      <div className="flex flex-col justify-center items-center">
        {BookingSection.slice(0, 2).map((services) => (
          <div
            key={services.id}
            className="md:flex block border border-black w-3/4 my-4 hover:opacity-90"
          >
            <Image
              src={services.img}
              alt={services.text}
              width={500}
              height={500}
              layout="responsive"
              className=""
            />
            <div className="p-8 bg-white flex gap-3 items-center justify-center flex-col">
              <p className="text-3xl font-bold">{services.text}</p>
              <p className="my-2 text-center">{services.desc}</p>
              <hr className=" my-4 border w-full border-black" />
              <p>{services.time}</p>
              <p>{services.price}</p>
              <Link href={`/booking/${services.id}`}>
                <button className="bg-black text-white hover:bg-white hover:text-black p-4 rounded-md">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Link href="/services" className="flex justify-center items-center ">
        <button className=" text-black text-lg underline hover:border-black hover:border hover:no-underline p-2 rounded-md">
          See More
        </button>
      </Link>
    </div>
  );
};
