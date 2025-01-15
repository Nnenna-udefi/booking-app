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
      const url = "http://localhost:5000/api/services";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        setServices(data);
        console.log(data);
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
    <div className="p-8">
      <div className="flex  flex-col justify-center items-center">
        <h2 className="text-center text-3xl font-bold underline">
          Our Services
        </h2>
        <div className="md:grid grid-cols-3 mt-6 justify-center block  gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="border border-black w-[300px] hover:opacity-90  my-4 "
            >
              <div>
                <Image
                  src={`https://dc-braiding-gqwc.onrender.com/${service.image}`}
                  alt={service.name}
                  height={300}
                  width={300}
                  className="w-[300px] h-[300px] object-cover"
                />
              </div>
              <div className="p-4 bg-white flex gap-2 items-center justify-center flex-col">
                <p className="text-2xl font-bold">{service.name}</p>
                <p className="my-2 text-center">{service.description}</p>
                <hr className="w-full my-2 border border-black" />
                <p>{service.duration} hours</p>
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
