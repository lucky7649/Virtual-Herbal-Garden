import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../AuthContext"; // Assuming user context is available

const Bookmarks = () => {
  const { user, token } = useAuth(); // Get the user and token from the AuthContext
  const [notification, setNotification] = useState(""); // State for notification
  const [bookmarkedPlants, setBookmarkedPlants] = useState([]); // Stores fetched bookmarked plants

   console.log(user._id)
  // Fetch bookmarks on component mount
  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/herbb", {
          params: { ids: user.bookmarks },
          headers: { Authorization: `Bearer ${token}` },
        });
        setBookmarkedPlants(response.data);
      } catch (error) {
        console.error("Error fetching bookmarked plants:", error);
      }
    };
  
    if (user && user.bookmarks) {
      fetchBookmarks();
    }
  }, [user, token]);
  

  // Remove a bookmark
  const handleRemoveBookmark = async (event, plant) => {
    event.preventDefault();
  
    try {
      // Call the backend to remove the bookmark
      const response = await axios.post(
        "http://localhost:5000/api/users/romovebookmark",
        {
          userId: user._id, // Pass the user's ID
          plantId: plant._id, // Pass the plant's ID to remove
        },
        {
          headers: { Authorization: `Bearer ${token}` }, // Include user's token
        }
      );
  
      if (response.data.success) {
        // Update the local state after successful removal
        setBookmarkedPlants((prevPlants) =>
          prevPlants.filter((item) => item._id !== plant._id)
        );
  
        // Display a notification
        setNotification(`${plant.name} has been removed from your bookmarks!`);
  
        // Clear notification after 3 seconds
        setTimeout(() => setNotification(""), 3000);
      } else {
        console.error("Failed to remove bookmark:", response.data.message);
      }
    } catch (error) {
      console.error("Error removing bookmark:", error);
    }
  };
  

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="text-center pt-16 font-serif font-bold text-4xl text-[#50B250]">
        <h1>Your Bookmarked Plants</h1>
      </div>

      {/* Notification */}
      {notification && (
        <div className="fixed top-5 right-5 bg-red-600 text-white p-4 text-center mt-[700px] rounded-md transition-transform transform translate-x-0 duration-500 ease-out w-[300px] max-w-full">
          {notification}
        </div>
      )}

      {/* Bookmark Cards */}
      <div className="flex-grow py-10 px-20 grid grid-cols-3 gap-8">
        {bookmarkedPlants && bookmarkedPlants.length > 0 ? (
          bookmarkedPlants.map((plant) => (
            <div
              key={plant._id}
              className="h-auto w-60 bg-gray-800 rounded-3xl shadow-lg"
            >
              <img
                className="rounded-3xl h-52 w-[240px] px-0.5 pt-0.5"
                src={plant.image}
                alt={plant.name}
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">{plant.name}</h3>
                <p className="text-gray-300 text-sm">{plant.description}</p>

                {/* Remove Bookmark Button */}
                <button
                  className="mt-4 px-3 py-1 bg-red-600 rounded-lg hover:bg-red-700"
                  onClick={(event) => handleRemoveBookmark(event, plant)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center text-center text-[#50B250] text-lg font-semibold">
            No bookmarks found. Explore plants and bookmark your favorites!
          </div>
        )}
      </div>

      {/* Footer
      <footer className="bg-gray-900 text-white py-4 text-center">
        <p>&copy; 2024 Virtual Herbal Garden. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default Bookmarks;
