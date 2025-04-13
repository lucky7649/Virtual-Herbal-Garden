import React, { useState } from 'react';

const AddHerb = () => {
  const [formData, setFormData] = useState({
    herbName: '',
    botanicalName: '',
    physicalDescription: '',
    habitatDistribution: '',
    medicinalMethod: '',
    conventionalComposition: '',
    chemicalComposition: '',
    pharmacologicalEffect: '',
    clinicalStudies: '',
    safetyPrecaution: '',
    culturalSignificance: '',
    successFind: '',
  });
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...formData, image, video });
  };

  const handleImageChange = (e) => setImage(URL.createObjectURL(e.target.files[0]));
  const handleVideoChange = (e) => setVideo(URL.createObjectURL(e.target.files[0]));

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Add New Herb to AYUSH Virtual Garden</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {Object.keys(formData).map((key) => (
          <div key={key}>
            <label
              htmlFor={key}
              className="block text-sm font-medium text-gray-700 capitalize"
            >
              {key.replace(/([A-Z])/g, ' $1')}:
            </label>
            <textarea
              id={key}
              value={formData[key]}
              onChange={handleChange}
              placeholder={`Enter ${key.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
              required={key !== 'successFind'}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
        ))}

        {/* Upload Image */}
        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Upload Herb Image:
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
          {image && (
            <img
              src={image}
              alt="Herb"
              className="mt-4 w-full max-h-64 object-cover rounded-md"
            />
          )}
        </div>

        {/* Upload Video */}
        <div>
          <label
            htmlFor="video"
            className="block text-sm font-medium text-gray-700"
          >
            Upload Herb Video:
          </label>
          <input
            type="file"
            id="video"
            accept="video/*"
            onChange={handleVideoChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
          {video && (
            <video
              controls
              className="mt-4 w-full max-h-64 rounded-md"
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Add Herb
        </button>
      </form>
    </div>
  );
};

export default AddHerb;
