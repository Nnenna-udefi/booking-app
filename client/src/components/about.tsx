import React from "react";
import img3 from "@/assests/images/goddess-braids.jpg";
import Image from "next/image";
import { Phone } from "lucide-react";

const About = () => {
  return (
    <div>
      <div className="flex  flex-col justify-center items-center">
        <div className="mt-8 relative text-center w-full flex flex-col justify-center items-center  text-white bg-hero bg-cover h-96 bg-center bg-no-repeat py-10 px-4">
          <div className="bg-black/80 absolute inset-0"></div>
          <h2 className="relative text-center  font-bold underline font-philosopher py-4 text-2xl md:text-6xl uppercase ">
            About Us
          </h2>
        </div>
      </div>
      <div className="p-8">
        <div className="md:flex block justify-between gap-10 my-6">
          <div className="bg-gray-500 p-8 w-full mb-3">
            <Image src={img3} alt="braids" className="w-full" />
          </div>
          <div className="">
            <p className="font-bold text-xl md:text-3xl font-philosopher">
              Welcome to DC Hair Braiding!
            </p>

            <p className="p-4 bg-[#5936ae] text-white text-center my-4">
              We specialize in all types of hair braiding such as Knotless
              Braids, Box Braids, Individual Braids, and more
            </p>

            <p className="leading-10 tracking-wider mt-6">
              With over 10 years of experience, we specialize in creating
              beautiful and unique hair braids for our clients. Our team of
              professionals is dedicated to providing the highest quality
              service and ensuring that every customer leaves feeling confident
              and satisfied with their new hairstyle. we provide straight hair
              only 1b color. Any others color and any curly human hair for boho
              will be provided by the customer. Wash and blow out services
              available for $20. Appointments available feel free to book with
              us now!!!!! walk in are welcome
            </p>
          </div>
        </div>
      </div>
      <div className="relative text-center  flex flex-col justify-center items-center text-white bg-about bg-cover h-96 bg-center bg-no-repeat py-10 px-4">
        <div className="bg-black/50 absolute inset-0"></div>
        <h2 className="relative font-philosopher py-4 text-2xl md:text-3xl uppercase ">
          DC Hair braiding Saloon
        </h2>
        <p className="relative text-xl md:text-2xl md:w-[60%] w-full">
          You dream about sleek, healthy looking hair thats looks picture
          perfect, ready to rock on any occasion? We will make your dreams come
          true.
        </p>

        <p className="flex items-center gap-2 bg-purple-700 text-white p-4 rounded-full mt-4 relative shadow-lg">
          <Phone /> +23444566667
        </p>
      </div>
    </div>
  );
};

export default About;
