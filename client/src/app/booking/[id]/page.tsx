import { Booking } from "../../../components/booking/booking";
import { Footer } from "../../../components/footer";
import { Nav } from "../../../components/nav";
import React from "react";

const BookingPage = () => {
  return (
    <div>
      <Nav />
      <Booking />
      <Footer />
    </div>
  );
};

export default BookingPage;
