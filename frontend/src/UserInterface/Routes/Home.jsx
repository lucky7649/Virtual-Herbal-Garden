import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Quiz from "./Quiz";
import Story from "./Story";
import axios from "axios";
import { useAuth } from "../../AuthContext";

const Home = ({ addBookmark }) => {
  const [plants, setPlants] = useState([]);
  const [notification, setNotification] = useState("");
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [showPlantOfTheDay, setShowPlantOfTheDay] = useState(false);

  const navigate = useNavigate();

  const { user } = useAuth();
  //  console.log(user._id);

  // Fetch plants from the server
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/herbs")
      .then((res) => setPlants(res.data))
      .catch((err) => console.error("Error fetching plants:", err));
  }, []);

  // Notification auto-hide logic
  useEffect(() => {
    let timer;
    if (isNotificationVisible) {
      timer = setTimeout(() => setIsNotificationVisible(false), 5000);
    }
    return () => clearTimeout(timer);
  }, [isNotificationVisible]);

  const handleAddBookmark = async (plant) => {
    try {
      // console.log(user._id)
      const userId = user._id; // Replace with the actual user ID from auth context/session
     
    const response = await axios.post(
      "http://localhost:5000/api/users/bookmark",
      { 
        plantId: plant._id, 
        userId: userId // Include `userId` in the request body 
      },
      {
        headers: {
          Authorization: `Bearer ${userId}`, // Replace with your actual auth mechanism, if applicable
        },
      }
    );
      setNotification(`${plant.name} has been bookmarked!`);
      setIsNotificationVisible(true);
    } catch (error) {
      console.error("Error adding bookmark:", error);
      setNotification("Failed to bookmark the plant.");
      setIsNotificationVisible(true);
    }
  };
  

  const getPlantOfTheDay = () => {
    const dayOfWeek = new Date().getDay();
    return plants.length > 0 ? plants[dayOfWeek % plants.length] : null;
  };

  const plantOfTheDay = getPlantOfTheDay();

  const filteredPlants = plants.filter((plant) =>
    plant.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Hero Section */}
      <div
        className="bg-cover bg-center w-full h-[70vh]"
        style={{
          backgroundImage: `url('https://v.etsystatic.com/video/upload/q_auto/Botanical_Table_k2hgyo.jpg')`,
        }}
      >
        <div className="text-center text-white pt-32">
          <h1 className="text-7xl font-bold animate-pulse">
            Welcome to AYUSH Virtual Herbal Garden
          </h1>
          <p className="mt-4 text-3xl font-semibold animate-pulse">
            Discover the healing power of nature's best remedies.
          </p>
        </div>
        <div className="pt-12 flex justify-center">
          <input
            type="text"
            className="w-[500px] h-12 bg-white rounded-l-3xl p-4 border-2 text-black"
            placeholder="Enter herb name 🌿"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="h-12 px-4 bg-green-500 text-white rounded-r-3xl">
            Search
          </button>
        </div>
      </div>

      {/* Plant Cards */}
      <div className="py-7 px-5 bg-green-500">
        <div className="flex flex-wrap gap-6 justify-center">
          {filteredPlants.length > 0 ? (
            filteredPlants.map((plant) => (
              <div key={plant.id} className="bg-gray-800 rounded-3xl p-4 w-[300px]">
                <img
                  className="rounded-3xl h-52 w-full"
                  src={plant.image}
                  alt={plant.name}
                />
                <h3 className="text-white font-bold mt-2">{plant.name}</h3>
                <p className="text-white">Scientific Name: {plant.scientificName}</p>
                <p className="text-white truncate">{plant.description}</p>
                <div className="flex justify-between mt-4">
                  <button
                    className="text-blue-500 hover:underline"
                    onClick={() => setSelectedPlant(plant)}
                  >
                    Learn More
                  </button>
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-400"
                    onClick={() => handleAddBookmark(plant)}
                  >
                    Add Bookmark
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white text-center">No plants found.</p>
          )}
        </div>
      </div>

      {/* Plant of the Day */}
      <div className="py-10 px-5 bg-green-400 text-center">
        <h2 className="text-3xl font-bold">Plant of the Day</h2>
        <button
          className="bg-green-500 text-white px-6 py-2 rounded-full mt-4"
          onClick={() => setShowPlantOfTheDay(!showPlantOfTheDay)}
        >
          {showPlantOfTheDay ? "Hide" : "Show"} Plant of the Day
        </button>
        {showPlantOfTheDay && plantOfTheDay && (
          <div className="bg-white rounded-3xl p-6 mt-6 shadow-lg">
            <img
              src={plantOfTheDay.image}
              alt={plantOfTheDay.name}
              className="rounded-3xl w-72 mx-auto"
            />
            <h3 className="text-2xl font-bold mt-4">{plantOfTheDay.name}</h3>
            <p className="text-gray-600">{plantOfTheDay.description}</p>
          </div>
        )}
      </div>

      {/* Modals */}
      {selectedPlant && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
          <div className="bg-white rounded-3xl p-8 w-[90%] max-w-3xl overflow-y-auto">
            <h2 className="text-2xl font-bold">{selectedPlant.name}</h2>
            <p>
              <strong>Scientific Name:</strong> {selectedPlant.scientificName}
            </p>
            <p>
              <strong>Description:</strong> {selectedPlant.description}
            </p>
            <p>
              <strong>Botanical Info:</strong> {selectedPlant.botanicalInfo}
            </p>
            <p>
              <strong>Physical Description:</strong> {selectedPlant.physicalDescription}
            </p>
            <p>
              <strong>Habitat and Distribution::</strong> {selectedPlant.habitat}
            </p>
            <p>
              <strong>Medicinal Method:</strong> {selectedPlant.medicinalMethod}
            </p>
            <p>
              <strong>Conventional Composition::</strong> {selectedPlant.conventionalComposition}
            </p>
            <p><strong>Chemical Composition:</strong> {selectedPlant.chemicalComposition}</p>
            <p><strong>Pharmacological Effect:</strong> {selectedPlant.pharmacologicalEffect}</p>
            <p><strong>Clinical Studies and Research:</strong> {selectedPlant.clinicalStudies}</p>
            <p><strong>Safety and Precaution:</strong> {selectedPlant.safetyPrecautions}</p>
            <p><strong>Cultural and Historical Significance:</strong> {selectedPlant.culturalSignificance}</p>
            <p><strong>Success in Finding the Plant:</strong> {selectedPlant.plantSuccess}</p>

            <p><strong>Reference Link:</strong> <a href={selectedPlant.referenceLink} target="_blank" rel="noopener noreferrer">{selectedPlant.referenceLink}</a></p>


            {/* Add other plant details */}
            <button
              className="mt-4 bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600"
              onClick={() => setSelectedPlant(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Quiz and Story Sections */}
      <div className="h-[650px]">
        <Quiz />
      </div>
      <div>
        <Story />
      </div>

      {/* Notification */}
      {isNotificationVisible && (
        <div className="fixed bottom-5 right-5 bg-green-500 text-white py-2 px-4 rounded-lg">
          {notification}
        </div>
      )}
    </div>
  );
};

export default Home;
