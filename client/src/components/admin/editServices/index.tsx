import { useParams } from "next/navigation";

import React from "react";
import { EditServicesForm } from "./editServices";
import { AdminNav } from "../adminNav";

export const EditServices = () => {
  const { serviceId } = useParams(); // Retrieve serviceId from the route

  if (!serviceId) {
    return <div>Loading...</div>; // Handle loading state for serviceId
  }

  return (
    <div>
      <AdminNav />
      <div className="md:ml-[180px]">
        <div className="md:block flex justify-between items-center border-b-2 font-bold">
          <h1 className="ml-8">Edit Services</h1>
        </div>
      </div>
      <EditServicesForm serviceId={Number(serviceId)} />
    </div>
  );
};
