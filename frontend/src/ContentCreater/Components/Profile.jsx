import React, { useState } from "react";
import { FaCamera, FaEdit, FaRegSave, FaUserCircle } from "react-icons/fa";

// Sample profile data
const initialProfileData = {
  name: "",
  username: "",
  bio: "",
  email: "",
  phone: "",
  profilePicture: "", // Placeholder image if no profile picture is set
};

const Profile = () => {
  const [profile, setProfile] = useState(initialProfileData);
  const [isEditing, setIsEditing] = useState(false);
  const [isNewProfile, setIsNewProfile] = useState(false); // Flag to distinguish between creating new or editing
  const [profileImage, setProfileImage] = useState(null); // Track the profile picture

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result); // Update profile image with the selected file
      };
      reader.readAsDataURL(file); // Convert the file to a data URL
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    setIsNewProfile(false); // Reset flag after saving
    alert("Profile updated successfully!");
  };

  return (
    <div className=" Profile flex justify-center items-center h-screen bg-gray-100 overflow-auto">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg max-h-[90vh] overflow-auto transition-transform">
        <div className="mb-8 text-center">
          <div className="relative mb-4">
            <img
              src={profileImage || profile.profilePicture || "https://via.placeholder.com/200"}
              alt="Profile"
              className="w-36 h-36 rounded-full object-cover border-4 border-blue-500"
            />
            <button className="absolute bottom-3 right-3 bg-blue-500 text-white px-3 py-2 rounded-md flex items-center">
              <label htmlFor="file-upload" className="cursor-pointer flex items-center">
                <FaCamera className="mr-2" />
                Change Picture
              </label>
              <input
                type="file"
                id="file-upload"
                className="hidden"
                onChange={handleImageChange}
              />
            </button>
          </div>
          <div>
            {isEditing ? (
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Edit Your Profile</h2>
            ) : isNewProfile ? (
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Create Your Profile</h2>
            ) : (
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{profile.name || "Your Name"}</h2>
            )}
            <p className="text-sm text-blue-500 mb-4">@{profile.username || "Username"}</p>
            <p className="text-sm text-gray-600 italic mb-6">{profile.bio || "Tell us about yourself..."}</p>
          </div>
        </div>

        {isEditing || isNewProfile ? (
          <div className="text-left mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Profile Information</h3>
            <form onSubmit={handleFormSubmit}>
              <label className="block text-sm text-gray-600 mb-2">Name:</label>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleInputChange}
                className="w-full p-3 mb-4 border rounded-lg border-gray-300 text-lg"
                placeholder="Enter your full name"
              />
              <label className="block text-sm text-gray-600 mb-2">Username:</label>
              <input
                type="text"
                name="username"
                value={profile.username}
                onChange={handleInputChange}
                className="w-full p-3 mb-4 border rounded-lg border-gray-300 text-lg"
                placeholder="Enter your username"
              />
              <label className="block text-sm text-gray-600 mb-2">Bio:</label>
              <textarea
                name="bio"
                value={profile.bio}
                onChange={handleInputChange}
                className="w-full p-3 mb-4 border rounded-lg border-gray-300 text-lg"
                placeholder="Tell us about yourself"
              />
              <label className="block text-sm text-gray-600 mb-2">Email:</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleInputChange}
                className="w-full p-3 mb-4 border rounded-lg border-gray-300 text-lg"
                placeholder="Enter your email"
              />
              <label className="block text-sm text-gray-600 mb-2">Phone:</label>
              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleInputChange}
                className="w-full p-3 mb-6 border rounded-lg border-gray-300 text-lg"
                placeholder="Enter your phone number"
              />
              <button
                type="submit"
                className="w-full py-3 px-4 bg-green-500 text-white font-semibold rounded-md flex justify-center items-center"
              >
                {isNewProfile ? "Create Profile" : "Save Changes"}
                <FaRegSave className="ml-2" />
              </button>
            </form>
          </div>
        ) : (
          <div className="mt-8">
            <p className="text-lg text-gray-800">Email: {profile.email || "Not provided"}</p>
            <p className="text-lg text-gray-800">Phone: {profile.phone || "Not provided"}</p>
            <button
              onClick={() => setIsEditing(true)}
              className="mt-4 bg-yellow-500 text-white py-3 px-6 rounded-md flex items-center justify-center"
            >
              <FaEdit className="mr-2" />
              Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
