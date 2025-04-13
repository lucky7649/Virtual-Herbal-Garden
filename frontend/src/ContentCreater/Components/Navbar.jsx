import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-700 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Content Creator Dashboard</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/content-creator" className="hover:underline">Dashboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;
