"use client";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { LoadingSpinner } from "../../../ui/loadingSpinner";

export const EditServicesForm = ({ id }: { id: string }) => {
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchServiceDetails() {
      try {
        const response = await fetch(
          `https://dc-braiding-gqwc.onrender.com/api/services/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch service details");
        }
        const data = await response.json();
        setService(data);
      } catch (error) {
        toast.error(
          error instanceof Error
            ? error.message
            : "An unexpected error occurred"
        );
      } finally {
        setLoading(false);
      }
    }
    fetchServiceDetails();
  }, [id]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!service) return;
    setService({ ...service, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", service!.name);
    formData.append("description", service!.description);
    formData.append("price", service!.price);
    formData.append("duration", service!.duration);
    if (service?.image instanceof File) {
      formData.append("image", service.image);
    }
    console.log(id);
    try {
      const response = await fetch(
        `https://dc-braiding-gqwc.onrender.com/api/services/${id}`,
        {
          method: "PUT",
          body: formData,
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update service");
      }

      toast.success("Service updated successfully!");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "An unexpected error occurred"
      );
    }
  };

  if (loading) {
    return (
      <div className="flex items-center h-screen justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!service) {
    return (
      <div className="flex items-center h-screen justify-center">
        Service not found
      </div>
    );
  }
  return (
    <div className="bg-white p-4 md:ml-[180px]">
      <form onSubmit={handleFormSubmit} className="mt-6">
        <div className="mb-4">
          <label htmlFor="name" className="block font-bold">
            Service Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={service.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block font-bold">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={service.description}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block font-bold">
            Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={service.price}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="duration" className="block font-bold">
            Duration
          </label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={service.duration}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block font-bold">
            Service Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setService({ ...service, image: e.target.files[0] });
              }
            }}
            className="w-full p-2 border rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Update Service
        </button>
      </form>
    </div>
  );
};
