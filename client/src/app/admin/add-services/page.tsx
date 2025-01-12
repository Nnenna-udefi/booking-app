import { AddServices } from "@/components/admin/service/addServices";
import { AdminNav } from "@/components/admin/adminNav";
import React from "react";
import { Toaster } from "react-hot-toast";

const AddServicesPage = () => {
  return (
    <div>
      <AdminNav />
      <Toaster position="top-right" reverseOrder={false} />
      <div className="md:ml-[180px]">
        <div className="md:block flex justify-between items-center border-b-2 font-bold">
          {/* <Image src={logo} alt="logo" className="w-20 md:hidden block" /> */}
          <h1 className="ml-8">Add Services</h1>
        </div>
      </div>
      <AddServices />
    </div>
  );
};

export default AddServicesPage;
