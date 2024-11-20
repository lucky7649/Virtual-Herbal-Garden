const mongoose = require("mongoose");

const herbSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    scientificName: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    benefits: {
      type: [String], // Array of strings
      default: [],
    },
    cultivation: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      default: "", // URL to the herb's image (stored in Cloudinary/Supabase)
    },
    videoUrl: {
      type: String,
      default: "", // URL to a video related to the herb
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true, // Reference to the user who created the herb entry (content creator)
    },
    isActive: {
      type: Boolean,
      default: true, // To allow admins to hide/deactivate specific herb entries
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

const Herb = mongoose.model("Herb", herbSchema);

module.exports = Herb;
