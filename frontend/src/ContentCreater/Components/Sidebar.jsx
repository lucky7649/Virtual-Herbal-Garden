import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  // Initialize navigate hook
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication tokens and user info
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Navigate to login page
    navigate("/login");
  };

  return (
    <div className="sidebar w-64 bg-emerald-600 text-white h-screen flex flex-col p-5 font-bold">
      {/* Title */}
      <h2 className="text-xl mb-6">Content Creator</h2>
      
      {/* Navigation Links */}
      <nav className="flex flex-col gap-6">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive
              ? "text-green-200 underline"
              : "text-white hover:text-green-300"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/add-herb"
          className={({ isActive }) =>
            isActive
              ? "text-green-200 underline"
              : "text-white hover:text-green-300"
          }
        >
          Add Herb
        </NavLink>
        <NavLink
          to="/my-herbs"
          className={({ isActive }) =>
            isActive
              ? "text-green-200 underline"
              : "text-white hover:text-green-300"
          }
        >
          My Herbs
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? "text-green-200 underline"
              : "text-white hover:text-green-300"
          }
        >
          Profile
        </NavLink>
        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white py-2 mt-4 rounded-md hover:bg-red-700 w-full"
        >
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
