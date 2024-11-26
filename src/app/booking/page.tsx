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
    console.log("Data sent to API:", data);
    const response = await fetch("/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error("Error posting booking:", response.statusText);
      return;
    }

    const result = await response.json();
    console.log("API response:", result);
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
