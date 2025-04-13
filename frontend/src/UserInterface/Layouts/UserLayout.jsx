import React from "react";
import Navbar from "../Components/Navbar"; // Adjust path based on your folder structure
import Footer from "../Components/Footer"; // Adjust path based on your folder structure
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default UserLayout;
