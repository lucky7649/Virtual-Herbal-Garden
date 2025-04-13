import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication tokens and user info
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Redirect to login page
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 h-full w-64 bg-green-600 text-white p-6">
      <h1 className="text-lg font-bold mb-6 pt-4">Admin Dashboard</h1>
      <ul className="space-y-4">
        <li>
          <Link
            to="/admin/dashboard"
            className="block p-2 rounded hover:bg-green-700"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/admin/users"
            className="block p-2 rounded hover:bg-green-700"
          >
            Users
          </Link>
        </li>
        {/* <li>
          <Link
            to="/admin/logs"
            className="block p-2 rounded hover:bg-green-700"
          >
            Logs
          </Link>
        </li> */}
      </ul>

      {/* Logout Button */}
      <div className="mt-auto">
        <button
          className="w-full px-4 py-2 mt-6 bg-red-500 rounded text-white hover:bg-red-600"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
