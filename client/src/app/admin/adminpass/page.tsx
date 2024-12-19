import { PassKey } from "@/components/admin/passKey";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import React from "react";

const AdminPassKeyPage = () => {
  return (
    <div>
      <Nav />
      <PassKey />
      <Footer />
    </div>
  );
};

export default AdminPassKeyPage;
