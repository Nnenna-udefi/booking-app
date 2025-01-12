"use client";

import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import toast from "react-hot-toast";
import Image from "next/image";
import { Search } from "lucide-react";
import logo from "@/assests/images/DC-logo-removebg.png";
import { customStyles } from "@/utils/constants";
import { LoadingSpinner } from "@/components/ui/loadingSpinner";
import { AdminNav } from "../adminNav";
import { useRouter } from "next/navigation";
import { DeleteModal } from "@/components/deleteModal";

export const ListServices = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [filterText, setFilterText] = useState("");
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function fetchServices() {
      const url = "https://dc-braiding-gqwc.onrender.com/api/services";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        setServices(data);
      } catch (error: any) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchServices();
  }, []);

  const filteredBookings = services.filter(
    (service) =>
      service.name.toLowerCase().includes(filterText.toLowerCase()) ||
      service.description.toLowerCase().includes(filterText.toLowerCase())
  );

  const handleEdit = (serviceId: number) => {
    router.push(`/admin/edit-services/${serviceId}`);
  };

  const handleDelete = async () => {
    if (selectedService) {
      try {
        const response = await fetch(
          `https://dc-braiding-gqwc.onrender.com/api/services/${selectedService.id}`,
          {
            method: "DELETE",
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to delete service`);
        }

        toast.success("Service deleted successfully");
        setServices(
          services.filter((service) => service.id !== selectedService.id)
        );
        setIsModalOpen(false);
      } catch (error: any) {
        toast.error(error.message);
      }
    }
  };

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
      cell: (row: Service, index: number) => <div>{index + 1}</div>,
    },
    {
      name: "Service's Name",
      selector: (row: Service) => row.name || "N/A",
      sortable: true,
    },
    {
      name: "Image",
      cell: (row: Service) => {
        const imageUrl =
          row.image instanceof File
            ? URL.createObjectURL(row.image)
            : row.image || "/placeholder-image.png";

        return (
          <Image
            src={imageUrl}
            alt={row.name || "Service Image"}
            className="w-52"
            width={200}
            height={150}
          />
        );
      },
      sortable: true,
    },
    {
      name: "Price",
      selector: (row: Service) => row.price || "N/A",
      sortable: true,
    },
    {
      name: "Duration",
      selector: (row: Service) => row.duration || "N/A",
    },

    {
      name: "Update",
      cell: (row: Service) => (
        <div className="flex gap-3">
          <button
            onClick={() => handleEdit(row.id)}
            className="bg-green-500 text-white w-10"
          >
            Edit
          </button>

          <button
            onClick={() => {
              setSelectedService(row);
              setIsModalOpen(true);
            }}
            className="bg-red-500 text-white w-10"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white p-4">
      <AdminNav />

      <div className="md:ml-[180px]">
        <div className="md:block flex justify-between items-center border-b-2 font-bold">
          <Image src={logo} alt="logo" className="w-20 md:hidden block" />
          <h1>Welcome, Admin</h1>
        </div>

        <h1 className="text-3xl mb-4">Services</h1>

        <div className="mb-4 relative flex justify-end">
          <input
            type="text"
            placeholder="Search services..."
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

      {isModalOpen && selectedService && (
        <DeleteModal
          setIsModalOpen={setIsModalOpen}
          handleDelete={handleDelete}
          selectedService={selectedService}
        />
      )}
    </div>
  );
};
