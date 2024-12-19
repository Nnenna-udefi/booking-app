"use client";

import React, { useState, useEffect } from "react";
import { LoadingSpinner } from "../ui/loadingSpinner";
import DataTable from "react-data-table-component";
import toast from "react-hot-toast";
import Image from "next/image";
import { Search } from "lucide-react";
import logo from "@/assests/images/DC-logo-removebg.png";
import { customStyles } from "@/utils/constants";

interface Booking {
  id: number;
  name: string;
  service: string;
  phoneNumber: string;
  email: string;
  date: string;
  time: string;
  price: string;
  status: string;
}

export const Admin = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    async function fetchBookings() {
      const url = "https://dc-braiding-gqwc.onrender.com/api/bookings";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        setBookings(data);
      } catch (error: any) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchBookings();
  }, []);

  const handleStatusChange = async (id: number, currentStatus: string) => {
    const newStatus = currentStatus === "Awaiting" ? "Confirmed" : "Awaiting";

    const updatedBookings = bookings.map((booking) =>
      booking.id === id ? { ...booking, status: newStatus } : booking
    );
    setBookings(updatedBookings);

    try {
      const response = await fetch(
        `https://dc-braiding-gqwc.onrender.com/api/bookings/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: newStatus }),
        }
      );

      if (!response.ok) {
        throw new Error(
          `Failed to update status. Status code: ${response.status}`
        );
      }
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "An unexpected error occurred."
      );
    }
  };

  const filteredBookings = bookings.filter(
    (booking) =>
      booking.name.toLowerCase().includes(filterText.toLowerCase()) ||
      booking.service.toLowerCase().includes(filterText.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center h-screen justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="grid h-full place-items-center">
        <p>Error: {error}</p>
      </div>
    );
  }

  const columns = [
    {
      name: "S/N",
      sortable: true,
      width: "70px",
      cell: (row: Booking, index: number) => <div>{index + 1}</div>,
    },
    {
      name: "Client's Name",
      selector: (row: Booking) => row.name || "N/A",
      sortable: true,
    },
    {
      name: "Service",
      selector: (row: Booking) => row.service || "N/A",
      sortable: true,
    },
    {
      name: "Phone Number",
      selector: (row: Booking) => row.phoneNumber || "N/A",
    },
    {
      name: "Email",
      selector: (row: Booking) => row.email || "N/A",
    },
    {
      name: "Date",
      selector: (row: Booking) => row.date || "N/A",
    },
    {
      name: "Time",
      selector: (row: Booking) => row.time || "N/A",
    },
    {
      name: "Price",
      selector: (row: Booking) => row.price || "N/A",
    },
    {
      name: "Status",
      cell: (row: Booking) => (
        <button
          onClick={() => handleStatusChange(row.id, row.status)}
          className={`px-2 py-1 rounded-md text-white ${
            row.status === "Awaiting" ? "bg-yellow-500" : "bg-green-500"
          }`}
        >
          {row.status || "Awaiting"}
        </button>
      ),
    },
  ];

  return (
    <div className="bg-white p-8">
      <div className="flex font-bold justify-between items-center border-b-2">
        <Image src={logo} alt="logo" className="w-20" />
        <h1>Welcome, Admin</h1>
      </div>

      <div className="md:flex block my-8 gap-4">
        <div className="bg-blue-200 my-2 rounded-md p-4">
          <h1>No of Bookings</h1>
          <p>{bookings.length}</p>
        </div>
        <div className="bg-blue-200 my-2 rounded-md p-4">
          <h1>No of confirmed bookings</h1>
          <p>{bookings.filter((b) => b.status === "Confirmed").length}</p>
        </div>
        <div className="bg-blue-200 my-2 rounded-md p-4">
          <h1>No of Awaiting bookings</h1>
          <p>{bookings.filter((b) => b.status === "Awaiting").length}</p>
        </div>
      </div>

      <h1 className="text-3xl mb-4">Bookings</h1>

      <div className="mb-4 relative flex justify-end">
        <input
          type="text"
          placeholder="Search bookings..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="border bg-none rounded-md text-black p-2 w-full md:w-1/3"
        />
        <Search className="absolute right-2 top-2 z-10 " />
      </div>

      <DataTable
        columns={columns}
        data={filteredBookings}
        pagination
        highlightOnHover
        responsive
        striped
        customStyles={customStyles}
      />
    </div>
  );
};
