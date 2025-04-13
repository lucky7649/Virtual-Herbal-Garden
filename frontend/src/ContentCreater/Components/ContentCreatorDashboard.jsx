import React from "react";
import { FaLeaf, FaMedkit, FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing


const ContentCreatorDashboard = () => {
  console.log("Rendering ContentCreatorDashboard");

  const navigate = useNavigate(); // Hook to navigate between pages

  const handleAddHerb = () => {
    // Navigate to the "Add Herb" page
    navigate("/add-herb");
  };

  return (
    <div className="flex-1 p-6 bg-white">
      {/* Welcome Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-green-800 mb-6">
          Welcome, Practitioner of Ayurveda & Holistic Wellness 🌿
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          As a dedicated practitioner, your expertise and knowledge can guide others toward a natural path to health and wellness. Let’s build a thriving community focused on holistic care.
        </p>

        {/* Icons and Graphics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <FaLeaf size={50} className="text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Herb Management</h3>
            <p className="text-center text-gray-700">
              Easily manage and track your herb collections, ensuring quality care and growth for each plant. Share your knowledge about their medicinal uses and benefits.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <FaMedkit size={50} className="text-red-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Holistic Remedies</h3>
            <p className="text-center text-gray-700">
              Offer your expertise by sharing holistic healing methods using time-honored remedies. Educate others on natural treatments and well-being practices.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <FaUsers size={50} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Wellness Community</h3>
            <p className="text-center text-gray-700">
              Engage with a global community of like-minded practitioners, exchange wisdom, and help others on their journey toward health and balance.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center mb-12 h-96">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV-V60P4f_c5jNgCpiIRubR2kjveE0rgmJ6A&s" // Using the imported image
            alt="Herbal Healing"
            className="w-full md:w-3/4 rounded-lg shadow-lg"
          />
        </div>

        {/* More Engaging Section */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 mb-6">
            Ready to share your wisdom with the world? Begin by adding your herbs, sharing your expertise on natural healing, and growing your impact within the wellness community.
          </p>
          <button
            className="px-8 py-4 bg-green-700 text-white font-bold rounded-lg shadow-lg hover:bg-green-800 transition-all duration-300"
            onClick={handleAddHerb} // On click, navigate to Add Herb page
          >
            Start Adding Herbs
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentCreatorDashboard;
