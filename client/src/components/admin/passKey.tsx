"use client";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

export const PassKey = () => {
  const [passKey, setPassKey] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validPassKey = "admin123";

    if (passKey === validPassKey) {
      localStorage.setItem("adminAuth", "true");
      redirect("/admin");
    } else {
      setError("Invalid passkey. Please try again.");
    }
  };
  return (
    <div className="bg-gray-800 flex justify-center items-center h-screen text-white">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <h1 className="md:text-4xl text-2xl mb-6">Admin Access</h1>

        <input
          type="password"
          placeholder="Enter Passkey"
          value={passKey}
          onChange={(e) => setPassKey(e.target.value)}
          className="border-2 p-3 text-black"
        />
        {error && <p className="text-red-500 my-2">{error}</p>}
        <button
          type="submit"
          className="bg-black w-60 mt-6 text-white rounded-md p-2"
        >
          Send
        </button>
      </form>
    </div>
  );
};
