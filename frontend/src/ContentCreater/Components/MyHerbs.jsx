import React, { useState } from "react";
import { FaEye, FaTrashAlt, FaEdit } from "react-icons/fa";

const MyHerbs = () => {
  const [herbs, setHerbs] = useState([
    {
      id: 1,
      name: "Basil",
      botanicalName: "Ocimum basilicum",
      image: "https://m.media-amazon.com/images/I/71YRPN7VqYL._AC_UF1000,1000_QL80_.jpg",
      description: "Used in Ayurveda for its healing properties.",
      medicinalUse: "Aids digestion, improves immune function.",
      cultivationMethod: "Prefers warm, sunny climates.",
      growingTips: "Harvest leaves regularly to promote growth.",
      habitat: "Native to tropical regions of Asia and Africa.",
      conventionalComposition: "Rich in essential oils like eugenol and linalool.",
      chemicalComposition: "Contains flavonoids, polyphenols, and volatile oils.",
      pharmacologicalEffect: "Antioxidant, anti-inflammatory, and antimicrobial properties.",
      clinicalStudies: "Studies show benefits in reducing stress and promoting cardiovascular health.",
      safetyPrecautions: "Avoid excessive consumption; may interfere with blood clotting.",
      culturalSignificance: "Sacred herb in Hindu culture, symbolizing purity.",
      successToFind: "Widely available in markets and gardens.",
    },
    {
      id: 2,
      name: "Mint",
      botanicalName: "Mentha",
      image: "https://5.imimg.com/data5/CA/SH/QQ/SELLER-81389294/mint-leaves-500x500.jpg",
      description: "Used for digestion and refreshing properties.",
      medicinalUse: "Relieves digestive issues, headaches.",
      cultivationMethod: "Grows well in moist, shaded environments.",
      growingTips: "Plant in containers to prevent spreading.",
      habitat: "Thrives in temperate regions worldwide.",
      conventionalComposition: "High in menthol content.",
      chemicalComposition: "Contains menthone, menthyl acetate, and carvone.",
      pharmacologicalEffect: "Analgesic, carminative, and decongestant effects.",
      clinicalStudies: "Clinical trials highlight benefits in IBS treatment.",
      safetyPrecautions: "Avoid in cases of GERD; may cause skin irritation in sensitive individuals.",
      culturalSignificance: "Used in culinary traditions globally.",
      successToFind: "Commonly grown in gardens and available fresh in stores.",
    },
    {
      id: 3,
      name: "Aloe Vera",
      botanicalName: "Aloe barbadensis miller",
      image: "https://media.istockphoto.com/id/1057094656/photo/aloe-vera-plant-isolated-on-white-background-clipping-path-included.jpg?s=612x612&w=0&k=20&c=ZmuCzEw15kCY0ByKaKCfNk6vqx-lSSHD2t2SbgUkGXU=",
      description: "Considered sacred and medicinal in Ayurveda.",
      medicinalUse: "Healing properties for skin and digestive health.",
      cultivationMethod: "Prefers hot, dry climates.",
      growingTips: "Avoid overwatering; keep in indirect sunlight.",
      habitat: "Native to arid regions of the Arabian Peninsula.",
      conventionalComposition: "Contains polysaccharides, enzymes, and vitamins.",
      chemicalComposition: "Includes aloin, barbaloin, and anthraquinones.",
      pharmacologicalEffect: "Anti-inflammatory, wound-healing, and laxative properties.",
      clinicalStudies: "Extensive research supports use for burns and wound healing.",
      safetyPrecautions: "Overuse may cause diarrhea; consult a physician before ingestion.",
      culturalSignificance: "Revered in Egyptian, Indian, and Chinese traditional medicine.",
      successToFind: "Readily available in markets and nurseries.",
    },
  ]);

  const [viewingId, setViewingId] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editedHerb, setEditedHerb] = useState(null);

  const handleView = (id) => {
    setViewingId(id);
  };

  const handleCloseView = () => {
    setViewingId(null);
  };

  const handleEdit = (id) => {
    const herbToEdit = herbs.find((herb) => herb.id === id);
    setEditedHerb({ ...herbToEdit });
    setEditingId(id);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedHerb({ ...editedHerb, [name]: value });
  };

  const handleSave = () => {
    setHerbs(
      herbs.map((herb) => (herb.id === editingId ? editedHerb : herb))
    );
    setEditingId(null);
    setEditedHerb(null);
  };

  const handleDelete = (id) => {
    setHerbs(herbs.filter((herb) => herb.id !== id));
  };

  return (
    <div className="p-8 bg-gradient-to-b from-green-50 to-green-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-teal-400 to-green-600 bg-clip-text text-transparent drop-shadow-md">
        🌿 Welcome to My Herbal Garden 🌿
      </h1>
      <p className="text-center text-lg text-gray-700 mb-8 font-medium">
        Discover, manage, and grow your collection of medicinal herbs.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {herbs.map((herb) => (
          <div key={herb.id} className="bg-white rounded-lg p-6 shadow-md transition-transform hover:scale-105 text-center">
            <img src={herb.image} alt={herb.name} className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-xl font-bold mt-4 text-teal-600">{herb.name}</h3>
            <p className="text-md text-gray-600">
              <strong>Botanical Name:</strong> {herb.botanicalName}
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <button
                className="text-blue-600 hover:text-blue-800"
                onClick={() => handleView(herb.id)}
              >
                <FaEye /> View
              </button>
              <button
                className="text-yellow-500 hover:text-yellow-600"
                onClick={() => handleEdit(herb.id)}
              >
                <FaEdit /> Edit
              </button>
              <button
                className="text-red-600 hover:text-red-800"
                onClick={() => handleDelete(herb.id)}
              >
                <FaTrashAlt /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View Modal */}
      {viewingId !== null && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 overflow-y-auto max-h-[90vh] relative">
            <button
              className="absolute top-4 right-4 w-8 h-8 flex justify-center items-center bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 focus:outline-none"
              onClick={handleCloseView}
            >
              ✖
            </button>
            {herbs.find((herb) => herb.id === viewingId) && (
              <>
                <img
                  src={herbs.find((herb) => herb.id === viewingId).image}
                  alt={herbs.find((herb) => herb.id === viewingId).name}
                  className="w-full h-56 object-cover rounded-md"
                />
                <h3 className="text-2xl font-bold mt-4 text-green-600">
                  {herbs.find((herb) => herb.id === viewingId).name}
                </h3>
                {Object.entries(herbs.find((herb) => herb.id === viewingId))
                  .filter(([key]) => key !== "id" && key !== "image" && key !== "name" && key !== "status")
                  .map(([key, value]) => (
                    <p key={key} className="mt-2 text-gray-700">
                      <strong className="capitalize">{key.split(/(?=[A-Z])/).join(" ")}:</strong> {value}
                    </p>
                  ))}
              </>
            )}
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editingId !== null && editedHerb && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 overflow-y-auto max-h-[90vh] relative">
            <button
              className="absolute top-4 right-4 w-8 h-8 flex justify-center items-center bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 focus:outline-none"
              onClick={() => setEditingId(null)}
            >
              ✖
            </button>
            <h3 className="text-2xl font-bold text-green-600">Edit Herb Details</h3>
            <form className="mt-4">
              {Object.keys(editedHerb).map((key) => {
                if (key === "id" || key === "image") return null;
                return (
                  <div key={key} className="mb-4">
                    <label className="block text-gray-700 font-medium">{key.split(/(?=[A-Z])/).join(" ")}</label>
                    <input
                      type="text"
                      name={key}
                      value={editedHerb[key]}
                      onChange={handleInputChange}
                      className="mt-2 p-2 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                );
              })}
              <button
                type="button"
                onClick={handleSave}
                className="bg-green-500 text-white p-2 rounded-md mt-4 w-full"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyHerbs;
