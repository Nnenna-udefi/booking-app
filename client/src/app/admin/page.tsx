import { IsAuth } from "@/components/isAuth";
import { Admin } from "../../components/admin";
import React from "react";

const AdminPage = () => {
  return (
    <IsAuth>
      <div className="bg-white">
        <Admin />
      </div>
    </IsAuth>
  );
};

export default AdminPage;
