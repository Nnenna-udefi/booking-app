"use client";
import { useParams } from "next/navigation";

import React from "react";
import { EditServicesForm } from "./editServices";
import { AdminNav } from "../../adminNav";

export const EditServices = () => {
  const { serviceId } = useParams();

  return (
    <div>
      <AdminNav />
      <div className="md:ml-[180px]">
        <div className="md:block flex justify-between items-center border-b-2 font-bold">
          <h1 className="ml-8">Edit Services</h1>
        </div>
      </div>
      {serviceId ? (
        <EditServicesForm serviceId={Number(serviceId)} />
      ) : (
        <p className="flex items-center h-screen justify-center">
          No Service Available
        </p>
      )}
    </div>
  );
};
