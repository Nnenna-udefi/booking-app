import { AdminNav } from "@/components/admin/adminNav";
import { EditServices } from "@/components/admin/editServices";
import React from "react";

const EditServicesPage = () => {
  return (
    <div>
      <AdminNav />

      <div className="md:ml-[180px]">
        <div className="md:block flex justify-between items-center border-b-2 font-bold">
          {/* <Image src={logo} alt="logo" className="w-20 md:hidden block" /> */}
          <h1 className="ml-8">Edit Services</h1>
        </div>
      </div>
      <EditServices serviceId={0} />
    </div>
  );
};

export default EditServicesPage;
