import React from "react";
import img3 from "@/assests/images/goddess-braids.jpg";
import Image from "next/image";
const About = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl underline text-center font-bold tracking-wider">
        About Us
      </h1>

      <div className="md:flex block justify-between gap-10 my-6">
        <div className="bg-gray-500 p-8 w-full mb-3">
          <Image src={img3} alt="braids" className="w-full" />
        </div>
        <div className="">
          <p className="font-bold text-xl">Welcome to DC Hair Braiding!</p>

          <p className="leading-10 tracking-wider mt-10">
            With over 10 years of experience, we specialize in creating
            beautiful and unique hair braids for our clients. Our team of
            professionals is dedicated to providing the highest quality service
            and ensuring that every customer leaves feeling confident and
            satisfied with their new hairstyle. we provide straight hair only 1b
            color. Any others color and any curly human hair for boho will be
            provided by the customer. Wash and blow out services available for
            $20. Appointments available feel free to book with us now!!!!! walk
            in are welcome
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
