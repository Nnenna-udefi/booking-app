import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import "../globals.css";

const ContactPage = () => {
  return (
    <div>
      <Nav />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
