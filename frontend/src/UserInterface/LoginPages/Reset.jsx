import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Reset() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-600 to-purple-700 relative overflow-hidden">
      {/* Background lines pattern */}
      <div className="absolute inset-0">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 800 600"
        >
          {/* You can add a background pattern here */}
        </svg>
      </div>

      {/* Forgot Password Card */}
      <div className="relative z-10 bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg max-w-sm w-full">
        <h2 className="text-white text-2xl font-bold text-center mb-6">Forgot Password</h2>
        <form>
          {/* Email Input */}
          <div className="relative mb-6">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border-b border-white/50 bg-transparent text-white focus:outline-none focus:border-yellow-300 placeholder-gray-200"
            />
          </div>
          {/* Reset Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-3 rounded-md font-semibold transition duration-300"
          >
            Reset Password
          </button>
        </form>
        {/* Remember password link */}
        <div className="text-center mt-6 text-white">
          Remember your password?{' '}
          <Link to="/login" className="text-yellow-400 hover:underline">
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Reset;
