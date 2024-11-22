"use client";
import { BookingForm } from "@/components/bookingForm";
import { Nav } from "@/components/nav";
import { BookingSection } from "@/utils/constants";
import { useParams } from "next/navigation";
import React from "react";

const BookingPage = () => {
  const { id } = useParams();

  const service = BookingSection.find((s) => s.id === parseInt(id as string));

  const handleBookingSubmit = async (data: {
    service: string;
    date: string;
    time: string;
  }) => {
    const response = await fetch("/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result);
  };
  return (
    <div>
      <Nav />
      <BookingForm
        onSubmit={handleBookingSubmit}
        initialService={service ? service.text : ""}
      />
    </div>
  );
};

export default BookingPage;
