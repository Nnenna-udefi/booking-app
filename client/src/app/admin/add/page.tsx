import { AddServices } from "@/components/admin/addServices";
import { AdminNav } from "@/components/admin/adminNav";
import React from "react";

const AddServicesPage = () => {
  return (
    <div>
      <AdminNav />

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
