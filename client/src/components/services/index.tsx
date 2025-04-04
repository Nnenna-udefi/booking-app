"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BookingSection } from "../../utils/constants";
import toast from "react-hot-toast";
import { LoadingSpinner } from "../ui/loadingSpinner";

export const Service = () => {
  const [services, setServices] = useState<Services[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function fetchServices() {
      const url = "https://dc-braiding-gqwc.onrender.com/api/services";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        setServices(data);
      } catch (error: any) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center h-screen justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="grid h-full place-items-center">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="bg-[#5936ae] mt-8">
      <div className="flex  flex-col justify-center items-center">
        <div className=" relative text-center w-full flex flex-col justify-center items-center  text-white bg-hero bg-cover h-96 bg-center bg-no-repeat py-10 px-4">
          <div className="bg-black/80 absolute inset-0"></div>
          <h2 className="relative text-center  font-bold underline font-philosopher py-4 text-2xl md:text-6xl uppercase ">
            What We Offer
          </h2>
        </div>
        <div className="p-8 md:grid grid-cols-3 mt-6 place-content-center justify-center block  gap-6">
          {BookingSection.map((service) => (
            <div
              key={service.id}
              className="border border-black w-[300px] bg-white hover:opacity-90  my-4 "
            >
              <div>
                <Image
                  // src={`https://dc-braiding-gqwc.onrender.com/${service.image}`}
                  src={service.img}
                  alt={service.text}
                  height={300}
                  width={300}
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <div className="p-4 bg-white flex gap-2 items-center justify-center flex-col">
                <p className="text-2xl font-bold">{service.text}</p>
                <p className="my-2 text-center">{service.desc}</p>
                <hr className="w-full my-2 border border-black" />
                <p>{service.time} hours</p>
                <p>{service.price}</p>
                <Link href={`/booking/${service.id}`}>
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
