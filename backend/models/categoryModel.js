const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String, // Image related to the category (optional)
      default: "",
    },
    isActive: {
      type: Boolean,
      default: true, // To activate/deactivate the category
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
