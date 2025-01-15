import { EditServices } from "@/components/admin/service/editServices";
import React from "react";
import { Toaster } from "react-hot-toast";

const EditServicesPage = () => {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <EditServices />
    </div>
  );
};

export default EditServicesPage;
