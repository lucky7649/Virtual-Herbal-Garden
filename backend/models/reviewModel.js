const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    herbId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Herb", // Reference to the herb being reviewed
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the user leaving the review
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5, // Rating scale from 1 to 5
    },
    comment: {
      type: String,
      required: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
