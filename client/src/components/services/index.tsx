import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BookingSection } from "../../utils/constants";

export const Service = () => {
  return (
    <div className="p-8">
      <div className="flex  flex-col justify-center items-center">
        <h2 className="text-center text-3xl font-bold underline">
          Our Services
        </h2>
        <div className="md:grid grid-cols-3 mt-6 justify-center block  gap-6">
          {BookingSection.map((services) => (
            <div
              key={services.id}
              className="border border-black w-[300px] hover:opacity-90  my-4 "
            >
              <div>
                <Image
                  src={services.img}
                  alt={services.text}
                  height={300}
                  width={300}
                  className="w-[300px] h-[300px] object-cover"
                />
              </div>
              <div className="p-4 bg-white flex gap-2 items-center justify-center flex-col">
                <p className="text-2xl font-bold">{services.text}</p>
                <p className="my-2 text-center">{services.desc}</p>
                <hr className="w-full my-2 border border-black" />
                <p>{services.time}</p>
                <p>{services.price}</p>
                <Link href={`/booking/${services.id}`}>
                  <button className="bg-black hover:bg-white hover:text-black text-white p-4 rounded-md">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
