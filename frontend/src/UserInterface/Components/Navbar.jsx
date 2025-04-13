import React, { useState, useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../AuthContext'; // Import AuthContext

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  
  const { logout, isAuthenticated } = useContext(AuthContext); // Access logout function
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Call the logout function from AuthContext
    navigate("/login"); // Redirect to the login page after logout
  };

  return (
    <>
      {/* Navbar */}
      <div className={`flex justify-between items-center px-6 md:px-20 py-4 transition-all duration-300 ease-in-out bg-emerald-600 shadow-lg rounded-md sticky top-0 z-50`}>
        <div className="text-white text-2xl font-medium font-serif">
          <h1>AYUSH Virtual</h1>
          <h1>Herbal Garden</h1>
        </div>

        {/* Hamburger Icon for Mobile View */}
        <div className="md:hidden">
          <button className="text-white text-3xl focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            ☰
          </button>
        </div>
    
        {/* Navigation Menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:flex items-center space-y-6 md:space-y-0 md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-[#252725] md:bg-transparent z-10 p-4 md:p-0 ml-[500px]`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 text-white">
            <Link to="/home"><li className="rounded-full bg-gray-900 bg-opacity-40 px-4 py-2 cursor-pointer">Home</li></Link>
            <Link to="/about"><li className="rounded-full bg-gray-900 bg-opacity-40 px-4 py-2 cursor-pointer">About</li></Link>
            <Link to="/virtualTour"><li className="rounded-full bg-gray-900 bg-opacity-40 px-4 py-2 cursor-pointer">Virtual Tour</li></Link>
          </ul>
        </div>

        {/* Grouped Logout Button and Profile Icon */}
        <div className="flex items-center space-x-14">
          {isAuthenticated && (
            <button className="bg-red-600 py-2 px-4 rounded-full bg-opacity-100" onClick={handleLogout}>
              Logout
            </button>
          )}

          {/* User Profile Icon and Menu */}
          <div className="relative">
            <button
              className="text-white text-3xl focus:outline-none"
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
            >
              <FaUserCircle />
            </button>
            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
                <Link
                  to="/bookmarks"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black transition duration-200 ease-in-out"
                >
                  Bookmarks
                </Link>
                <Link
                  to="/profile" // Link to the profile page
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black transition duration-200 ease-in-out"
                >
                  Profile
                </Link>
                <Link
                  to="/setting"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black transition duration-200 ease-in-out"
                >
                  Settings
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Profile Page Outlet (Where the profile page will be rendered) */}
      <Outlet />
    </>
  );
};

export default Navbar;
