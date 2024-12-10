"use client";
import React from "react";
import dynamic from "next/dynamic";
import { BookMarkedIcon, Mail, PhoneCall } from "lucide-react";
import MapComponent from "./ui/map";

export const Contact = () => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl my-6 md:text-4xl underline">Contact Us</h1>

      <div className="md:flex justify-between items-center my-6 gap-6 block">
        <div className="flex flex-col justify-center items-center my-2">
          <PhoneCall />
          <p>(999) 094 00</p>
          <p> We would love to hear from you.</p>
        </div>
        <div className="flex flex-col justify-center items-center my-2">
          <BookMarkedIcon />
          <p>
            We are located in the Mall At Prince George's Hyattsville Maryland.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center my-2">
          <Mail />
          <p>Feel free to email us your questions</p>
          <p>DC@gmail.com</p>
        </div>
      </div>

      <div>
        <h2 className="underline text-xl my-2">Hours of Operation</h2>
        <p>Monday - Saturday 7:00AM - 6:00PM</p>

        <p>Sunday 7:00AM - 6:00PM</p>

        <p>Walk-Ins and Same day appointment are based on availability only.</p>
      </div>
      <div className="my-6" style={{ width: "700px", height: "500px" }}>
        {/* <MapComponent /> */}
      </div>
    </div>
  );
};
