import React, { createContext, useState, useEffect ,  useContext} from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [herbs, setHerbs] = useState([]); // State to store herbs
  const [loading, setLoading] = useState(false); // Loading state
  const [token, setToken] = useState();

  // Check for authentication on initial load
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = JSON.parse(localStorage.getItem("user"));
    if (token && userData) {
      setIsAuthenticated(true);
      setUser(userData);
    }
  }, []);

   // Fetch herbs from API
   const getHerbs = async () => {
    setLoading(true); // Set loading to true while fetching
    try {
      const response = await fetch('http://localhost:5000/api/herbs'); // Replace with your API endpoint
      setHerbs(response.data); // Set herbs data in state
    } catch (error) {
      console.error("Error fetching herbs:", error);
    } finally {
      setLoading(false); // Set loading to false once done
    }
  };

  // Logout function
  const logout = () => {
    // Clear authentication data from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Reset authentication state
    setIsAuthenticated(false);
    setUser(null);
  };

  

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, userId: user?.id, token, setUser, herbs, loading, getHerbs, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider; 