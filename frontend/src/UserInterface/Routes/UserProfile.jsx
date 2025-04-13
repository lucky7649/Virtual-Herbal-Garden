import React, { useState, useEffect } from "react";
import { FaCamera, FaEdit, FaRegSave } from "react-icons/fa";
import { useAuth } from "../../AuthContext";

const UserProfile = () => {
  const [profile, setProfile] = useState({
    name: "",
    username: "",
    bio: "Tell us about yourself",
    email: "",
    phone: "",
    profilePicture: "https://via.placeholder.com/200",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState("https://via.placeholder.com/200");
  const { user } = useAuth();

  // Populate profile data when the user is available
  useEffect(() => {
    if (user) {
      setProfile({
        name:  user.username || "User",
        username: user.username || "",
        bio: user.bio || "Tell us about yourself",
        email: user.email || "",
        phone: user.phone || "12345",
        profilePicture: user.profilePicture || "https://via.placeholder.com/200",
      });
      setProfileImage(user.profilePicture || "https://via.placeholder.com/200");
    }
  }, [user]);

  // Handle input changes for profile data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  // Handle image change (profile picture)
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

  // Handle form submission for updating profile
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setProfile({
      ...profile,
      profilePicture: profileImage, // Ensure profile image is updated
    });
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 overflow-auto">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg max-h-[90vh] overflow-auto transition-transform">
        <div className="mb-8 text-center">
          <div className="relative mb-4">
            <img
              src={profileImage} // Displaying the profile image
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
                onChange={handleImageChange} // Updating the image when file changes
              />
            </button>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{profile.name}</h2>
            <p className="text-sm text-blue-500 mb-4">@{profile.username}</p>
            <p className="text-sm text-gray-600 italic mb-6">{profile.bio}</p>
          </div>
        </div>

        {/* Profile Edit Form */}
        {isEditing ? (
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
                Save Changes
                <FaRegSave className="ml-2" />
              </button>
            </form>
          </div>
        ) : (
          <div className="mt-8">
            <p className="text-lg text-gray-800">Email: {profile.email}</p>
            <p className="text-lg text-gray-800">Phone: {profile.phone}</p>
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

export default UserProfile;
