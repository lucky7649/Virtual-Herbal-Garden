import { response } from 'express';
import React , { useState, useEffect }from 'react';

const Auth = () => {
    const [user, setUser] = useState(""); // State for storing user data
    const [error, setError] = useState(""); // Optional: state to handle errors
  
    const userAuthentication = async () => {
      try {
        const token = localStorage.getItem("token");
  
        // If there's no token, show an error or return early
        if (!token) {
          setError("No token found, please log in.");
          return;
        }
  
        const response = await fetch("http://localhost:5000/api/users/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        // Check if the response was successful
        if (response.ok) {
          const data = await response.json();
          setUser(data.user); // Assuming the response has a `user` key
        } else {
          setError("Failed to fetch user data");
        }
      } catch (error) {
        setError(error.message);
        console.log(error); // Log any errors
      }
    };
  
    useEffect(() => {
      userAuthentication(); // Trigger authentication on component mount
    }, []);
    return (
        <div>

        </div>
    );
}

export default auth;
