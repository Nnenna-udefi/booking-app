import { ListServices } from "@/components/admin/service/listServices";
import React from "react";
import { Toaster } from "react-hot-toast";

const ServicesPage = () => {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <ListServices />
    </div>
  );
};

export default ServicesPage;
