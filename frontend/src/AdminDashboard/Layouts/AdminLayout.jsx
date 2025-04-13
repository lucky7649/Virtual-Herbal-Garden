import React from "react";
import Navigation from "../components/Navigation"; // Adjust path based on your structure
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex">
      <Navigation /> {/* Sidebar Navigation */}
      <div className="flex-grow p-6">
        <Outlet /> {/* Content will be rendered here */}
      </div>
    </div>
  );
};

export default AdminLayout;
