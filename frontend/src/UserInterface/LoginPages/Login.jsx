import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../AuthContext";

function Login() {
  const { setIsAuthenticated, setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email.trim() || !password.trim()) {
      setError("Please fill in both fields.");
      return;
    }

    try {
      setIsLoading(true);
      setError(""); // Clear any existing errors

      // API call
      const response = await axios.post("http://localhost:5000/api/users/login", {
        email: email.trim(),
        password: password.trim(),
      });

      const { token, user } = response.data;

      if (token && user) {
        // Save token and user data to localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        // Update global authentication state
        setIsAuthenticated(true);
        setUser(user);

        // Redirect based on user role
        if (user.role === "admin") {
          navigate("/admin");
        } else if (user.role === "content-creator") {
          navigate("/content-creator");
        } else {
          navigate("/home");
        }
      } else {
        setError("Invalid server response. Please try again.");
      }
    } catch (err) {
      // Log error details and set user-friendly error message
      console.error("Login failed:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setIsLoading(false); // Always reset the loading state
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-500 to-green-700">
      <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 w-80 shadow-xl">
        <div className="flex justify-center mb-4">
          <span className="text-5xl text-white">🌿</span>
        </div>
        <h2 className="text-center text-white text-2xl font-bold mb-6">
          AYUSH Virtual Herbal Garden
        </h2>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mb-4 bg-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 text-white placeholder-gray-300"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 mb-6 bg-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 text-white placeholder-gray-300"
          />
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition duration-300"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="text-center mt-6 text-[#ffff] text-sm">
          <p>
            Don't have an account?{" "}
            <Link to="/register" className="text-[#1b1b1b] hover:underline">
              Register
            </Link>
          </p>
          <p>
            Forgot your password?{" "}
            <Link to="/reset" className="text-[#1b1b1b] hover:underline">
              Reset it here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
