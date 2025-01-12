"use client";

import React, { useState } from "react";
import { toast } from "react-hot-toast";

export const AddServices = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    duration: "",
  });
  const [image, setImage] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("duration", formData.duration);
    if (image) {
      formDataToSend.append("image", image); // Appending the image file
    } else {
      console.error("No image selected"); // Add some debug logging
    }

    try {
      const response = await fetch(
        "https://dc-braiding-gqwc.onrender.com/api/services",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add service. Please try again.");
      }

      toast.success("Service added successfully!");
      setFormData({ name: "", description: "", price: "", duration: "" });
      setImage(null);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "An unexpected error occurred"
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-white p-8">
      <form
        onSubmit={handleSubmit}
        className="md:ml-[180px] ml-0 my-8 space-y-4"
      >
        <div>
          <label htmlFor="name" className="block font-medium">
            Service Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 w-full rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block font-medium">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="border p-2 w-full rounded-md"
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="price" className="block font-medium">
            Price in Naira
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="border p-2 w-full rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="duration" className="block font-medium">
            Duration (in hours)
          </label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="border p-2 w-full rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="image" className="block font-medium">
            Service Image
          </label>
          <input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="border p-2 w-full rounded-md"
          />
          {image && (
            <p className="mt-2 text-sm text-gray-600">
              Selected file: {image.name}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`p-2 rounded-md text-white ${
            loading ? "bg-gray-500" : "bg-blue-500"
          }`}
        >
          {" "}
          {loading ? "Adding ..." : "Add Service"}{" "}
        </button>
      </form>
    </div>
  );
};
