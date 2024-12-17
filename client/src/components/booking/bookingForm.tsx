import { BookingSection } from "../../utils/constants";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type BookingFormProps = {
  onSubmit: (data: BookingData) => void;
  initialService?: string;
  price: string;
};

export const BookingForm = ({
  onSubmit,
  initialService,
  price,
}: BookingFormProps) => {
  const router = useRouter();
  const [service, setService] = useState(initialService);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<BookingData | null>(
    null
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (service && date && time) {
      const bookingData = {
        service,
        date,
        time,
        name,
        email,
        phoneNumber,
        price,
      };
      onSubmit(bookingData);
      setBookingDetails(bookingData);
      setShowModal(true);
      resetForm();
    }
  };

  const resetForm = () => {
    setService(""),
      setTime(""),
      setDate(""),
      setPhoneNumber(""),
      setName(""),
      setEmail("");
  };

  const handleRedirect = () => {
    setShowModal(false);
    router.push("/");
  };

  const InputItems = [
    {
      label: "Enter Name",
      value: name,
      type: "text",
      change: setName,
    },
    {
      label: "Enter Email Address",
      value: email,
      type: "email",
      change: setEmail,
    },
    {
      label: "Enter Phone Number",
      value: phoneNumber,
      type: "text",
      change: setPhoneNumber,
    },
    {
      label: "Select Date",
      value: date,
      type: "date",
      change: setDate,
    },
    {
      label: "Select Time",
      value: time,
      type: "time",
      change: setTime,
    },
  ];
  return (
    <div className="p-8 flex flex-col justify-center items-center">
      <h1 className="text-3xl text-center mb-4">Book Your Service</h1>
      <p>
        Please fill out the form below to schedule an appointment with DC
        Braiding. To better serve you, we will need at least 48 hours notice
        prior to your appointment date. If this is a last minute booking, please
        give us a call at (301) 559-2940 to confirm your appointment. Walk-Ins
        are based on availabilty.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 w-3/4">
        {service ? (
          <div className="flex gap-2 items-center text-lg">
            <label className="text-lg">Service:</label>
            <p className="font-bold">{service}</p>
          </div>
        ) : (
          <div>
            {" "}
            <label className="text-lg">Select a Service:</label>
            <br />
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="border rounded my-2 w-full p-2 bg-white"
            >
              <option value="">Choose Service</option>

              {BookingSection.map((item) => (
                <option
                  key={item.id}
                  value={item.text}
                  className="bg-gray-800 text-white"
                >
                  {item.text}
                </option>
              ))}
            </select>
          </div>
        )}

        {InputItems.map((items, index) => (
          <div key={index}>
            <label className="text-lg">{items.label}</label>
            <input
              type={items.type}
              value={items.value}
              onChange={(e) => items.change(e.target.value)}
              className="border rounded p-2 w-full"
            />
          </div>
        ))}

        <button
          type="submit"
          className={`rounded p-2 mt-4 ${
            service && date && time && name && phoneNumber && email
              ? "bg-black text-white"
              : "bg-gray-400 text-gray-700 cursor-not-allowed"
          }`}
          disabled={!(service && date && time && name && phoneNumber && email)}
        >
          {service && date && time && name && phoneNumber
            ? "Confirm Booking"
            : "Complete All Fields"}
        </button>
      </form>

      {showModal && bookingDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-3/4 max-w-md">
            <div className="flex justify-between">
              {" "}
              <h2 className="text-2xl font-bold mb-4">Booking Confirmed!</h2>
              <X onClick={() => setShowModal(false)} />
            </div>
            <p>
              <strong>Service:</strong> {bookingDetails.service}
            </p>
            <p>
              <strong>Date:</strong> {bookingDetails.date}
            </p>
            <p>
              <strong>Price:</strong> {bookingDetails.price}
            </p>
            <p>
              <strong>Time:</strong> {bookingDetails.time}
            </p>
            <button
              onClick={handleRedirect}
              className="bg-blue-500 text-white p-2 rounded mt-4"
            >
              Back to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
