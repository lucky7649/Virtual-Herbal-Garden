import React, { useEffect, useState } from "react";

const VirtualTour = () => {
  const [plants, setPlants] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    const fetchPlantData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/herbs"); // Replace with your API endpoint
        const data = await response.json(); // Assume it returns an array of plant objects
        setPlants(data);
      } catch (error) {
        console.error("Error fetching plant data:", error);
      }
    };

    fetchPlantData();
  }, []);

  return (
    <div className="flex flex-col items-center bg-gray-50 space-y-8 overflow-y-auto h-full py-10">
      {plants.map((plant, index) => (
        <div
          key={plant._id}
          className="flex w-[80%] h-auto bg-white rounded-lg shadow-lg border-2 border-black p-4"
        >
          {index % 2 === 0 ? (
            <>
              {/* Left Side - 3D Model */}
              <div className="w-1/2 flex items-center justify-center border-r border-gray-300">
                <iframe
                  title={`3D Model - ${plant.name}`}
                  src={`https://sketchfab.com/models/${plant._3DId}/embed`}
                  width="100%"
                  height="300px"
                  allowFullScreen
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  style={{ border: "none" }}
                ></iframe>
              </div>

              {/* Right Side - Details */}
              <div className="w-1/2 p-4 space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">{plant.name}</h2>
                <p className="text-gray-600 italic">{plant.scientificName}</p>
                <p className="text-gray-600">{plant.description}</p>
                <a
                  href={plant.referenceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Learn more
                </a>
              </div>
            </>
          ) : (
            <>
              {/* Left Side - Details */}
              <div className="w-1/2 p-4 space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">{plant.name}</h2>
                <p className="text-gray-600 italic">{plant.scientificName}</p>
                <p className="text-gray-600">{plant.description}</p>
                <a
                  href={plant.referenceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Learn more
                </a>
              </div>

              {/* Right Side - 3D Model */}
              <div className="w-1/2 flex items-center justify-center border-l border-gray-300">
                <iframe
                  title={`3D Model - ${plant.name}`}
                  src={`https://sketchfab.com/models/${plant._3DId}/embed`}
                  width="100%"
                  height="300px"
                  allowFullScreen
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  style={{ border: "none" }}
                ></iframe>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default VirtualTour;
