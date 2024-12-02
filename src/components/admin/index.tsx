"use client";
import { Search } from "lucide-react";
import React, { useState, useEffect } from "react";
import { LoadingSpinner } from "../ui/loadingSpinner";

export const Admin = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function fetchBookings() {
      const url = "http://localhost:5000/api/bookings";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        setBookings(data);
      } catch (error: any) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchBookings();
  }, []);

  const handleStatusChange = async (id: number, currentStatus: string) => {
    const newStatus = currentStatus === "Awaiting" ? "Confirmed" : "Awaiting";

    const updatedBookings = bookings.map((booking) =>
      booking.id === id
        ? {
            ...booking,
            status: newStatus,
          }
        : booking
    );
    setBookings(updatedBookings);

    try {
      const response = await fetch(`http://localhost:5000/api/bookings/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error(
          `Failed to update status. Status code: ${response.status}`
        );
      }
    } catch (error) {
      console.error("Failed to update booking status:", error);
    }
  };

  const confirmedBookings = bookings.filter(
    (booking) => booking.status === "Confirmed"
  );
  const awaitingBookings = bookings.filter(
    (booking) => booking.status === "Awaiting"
  );

  if (loading) return;
  <div className="grid h-full place-items-center">
    <LoadingSpinner />
  </div>;

  if (error)
    return (
      <div className="grid h-full place-items-center">
        <p> Error: {error}</p>
      </div>
    );
  return (
    <div className="bg-white p-8 ">
      <div className="flex font-bold justify-between border-b-2">
        <h1>DC</h1>
        <h1>Welcome, Admin</h1>
      </div>

      <div className="md:flex block my-8 gap-4">
        <div className="bg-blue-200 my-2 rounded-md p-4">
          <h1>No of Bookings</h1>
          <p>{bookings.length}</p>
        </div>
        <div className="bg-blue-200 my-2 rounded-md p-4">
          <h1>No of confirmed bookings</h1>
          <p>{confirmedBookings.length}</p>
        </div>
        <div className="bg-blue-200 my-2 rounded-md p-4">
          <h1>No of Awaiting bookings</h1>
          <p>{awaitingBookings.length}</p>
        </div>
      </div>

      <h1 className="text-3xl">Bookings</h1>
      <div className="border rounded-md p-4">
        <div className="flex justify-between my-2 items-center">
          <p>All</p>
          <div className="relative">
            <input type="text" className="border rounded-md text-black p-1" />
            <Search className="absolute right-5 bottom-1 " size={20} />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr className="text-left">
                <th className="py-3 px-4 text-sm font-semibold">S/N</th>
                <th className="py-3 px-4 text-sm font-semibold">
                  Client's Name
                </th>
                <th className="py-3 px-4 text-sm font-semibold">Service</th>
                <th className="py-3 px-4 text-sm font-semibold">
                  Phone Number
                </th>
                <th className="py-3 px-4 text-sm font-semibold">Email</th>
                <th className="py-3 px-4 text-sm font-semibold">Date</th>
                <th className="py-3 px-4 text-sm font-semibold">Time</th>
                <th className="py-3 px-4 text-sm font-semibold">Price</th>
                <th className="py-3 px-4 text-sm font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => {
                return (
                  <tr
                    key={booking.id}
                    className="hover:bg-gray-100 text-sm border-t border-gray-200"
                  >
                    <td className="py-3 px-4">{index + 1}</td>
                    <td className="py-3 px-4">{booking.name || "N/A"}</td>
                    <td className="py-3 px-4">{booking.service || "N/A"}</td>
                    <td className="py-3 px-4">
                      {booking.phoneNumber || "N/A"}
                    </td>
                    <td className="py-3 px-4">{booking.email || "N/A"}</td>
                    <td className="py-3 px-4">{booking.date || "N/A"}</td>
                    <td className="py-3 px-4">{booking.time || "N/A"}</td>
                    <td className="py-3 px-4">{booking.price || "N/A"}</td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() =>
                          handleStatusChange(booking.id, booking.status)
                        }
                        className={`px-2 py-1 rounded-md text-white ${
                          booking.status === "Awaiting"
                            ? "bg-yellow-500"
                            : "bg-green-500"
                        }`}
                      >
                        {booking.status || "Awaiting"}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
