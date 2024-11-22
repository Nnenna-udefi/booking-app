"use client";
import { BookingForm } from "@/components/bookingForm";
import { Nav } from "@/components/nav";
import { BookingSection } from "@/utils/constants";
import { useParams } from "next/navigation";
import React from "react";

const BookingPage = () => {
  const { id } = useParams();

  const service = BookingSection.find((s) => s.id === parseInt(id as string));

  const handleBookingSubmit = (data: {
    service: string;
    date: string;
    time: string;
  }) => {
    console.log("Booking data:", data);
    // Add logic to handle the booking submission, e.g., send it to a backend API
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
