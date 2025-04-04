"use client";
import React from "react";

import { BookMarkedIcon, Mail, PhoneCall } from "lucide-react";
import map from "@/assests/images/map.png";
import Image from "next/image";

export const Contact = () => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl my-6 md:text-4xl underline">Contact Us</h1>

      <div className="md:flex justify-between items-center my-6 gap-6 block">
        <div className="flex flex-col justify-center items-center py-4 text-base md:text-xl">
          <PhoneCall />
          <p>(999) 094 00</p>
          <p> We would love to hear from you.</p>
        </div>
        <div className="flex flex-col justify-center items-center py-4 text-base md:text-xl">
          <BookMarkedIcon />
          <p>
            We are located in the Mall At Prince George's Hyattsville Maryland.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center py-4 text-base md:text-xl">
          <Mail />
          <p>Feel free to email us your questions</p>
          <p>DC@gmail.com</p>
        </div>
      </div>

      <div className="text-base md:text-xl">
        <h2 className="underline text-xl md:text-2xl py-4">
          Hours of Operation
        </h2>
        <p>Monday - Saturday 7:00AM - 6:00PM</p>

        <p>Sunday 7:00AM - 6:00PM</p>

        <p>Walk-Ins and Same day appointment are based on availability only.</p>
      </div>
      <div className="py-6 w-full">
        {/* <MapComponent /> */}
        {/* <iframe
          width="100%"
          height="400px"
          src="https://api.mapbox.com/styles/v1/nnennaudefi/cm4mj2mv2002c01r088gz3dee.html?title=false&access_token=pk.eyJ1Ijoibm5lbm5hdWRlZmkiLCJhIjoiY2x2cW0xa21vMGFrbzJpbWg5bjd6eHlpYSJ9.tS6PeVRuZ3kCFY3EjaG8Og&zoomwheel=false#9.54/40.6979/-73.98"
          title="Booking-app-location"
        ></iframe> */}
        <Image src={map} alt="map" />
      </div>
    </div>
  );
};
