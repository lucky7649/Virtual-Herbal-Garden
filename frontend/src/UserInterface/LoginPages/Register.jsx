import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/users/register', {
        username,
        email,
        password,
      });
      alert(response.data.message); // Show success message
      window.location.href = '/login'; // Redirect to login page after successful registration
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
        {/* Left Side - Information Section */}
        <div className="bg-gradient-to-r from-green-400 to-blue-400 p-8 w-1/2 flex flex-col justify-center">
          <h2 className="text-white text-3xl font-bold mb-4">AYUSH Virtual Herbal Garden</h2>
          <p className="text-white text-lg">
            Embark on a journey through nature's healing wonders. Join our community and discover the ancient wisdom of Ayurvedic herbs.
          </p>
        </div>

        {/* Right Side - Form Section */}
        <div className="w-1/2 p-10 bg-white">
          {error && <div className="text-red-500 text-center mb-4">{error}</div>}
          <form onSubmit={handleRegister}>
            {/* Name Input */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Your Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 placeholder-gray-500"
              />
            </div>
            {/* Email Input */}
            <div className="relative mb-6">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 placeholder-gray-500"
              />
            </div>
            {/* Password Input */}
            <div className="relative mb-6">
              <input
                type="password"
                placeholder="Create Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 placeholder-gray-500"
              />
            </div>
            {/* Join Button */}
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-md font-semibold transition duration-300"
            >
              Join the Garden
            </button>
          </form>
          {/* Already a Member Link */}
          <div className="text-center mt-6 text-gray-600">
            Already a member?{' '}
            <Link to="/login" className="text-green-500 hover:underline">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
