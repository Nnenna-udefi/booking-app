import { BookingSection } from "../../utils/constants";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export const ServicesCard = () => {
  return (
    <div className="">
      <h2 className="text-center text-white uppercase font-philosopher font-bold text-3xl">
        Our Services
      </h2>
      <Image
        src="https://saranbraid.com/wp-content/themes/saran-african-hair-brading/images/head-tag.png"
        alt="heading"
        width={300}
        height={300}
        className="img-fluid fill d-block mx-auto"
      />
      <div className="flex md:flex-row flex-col w-fit justify-center gap-4 items-center">
        {BookingSection.slice(0, 2).map((services) => (
          <div
            key={services.id}
            className=" border border-black block md:flex h-full  my-4 hover:opacity-90"
          >
            <Image
              src={services.img}
              alt={services.text}
              width={300}
              height={300}
              className="w-[300px] h-[300px]"
            />
            <div className="p-2 bg-white flex gap-2 items-center justify-center flex-col">
              <p className="text-3xl font-bold">{services.text}</p>
              <p className="py-2 text-center">{services.desc}</p>
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
        <button className=" text-white text-lg hover:underline hover:border-black hover:border py-2 px-6 uppercase bg-[#c4a82f]  shadow-lg rounded-md">
          See More
        </button>
      </Link>
    </div>
  );
};
