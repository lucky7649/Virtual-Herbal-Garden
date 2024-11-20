const Review = require("../models/reviewModel");
const Herb = require("../models/herbModel");

// Create a new review for a herb
exports.createReview = async (req, res) => {
  try {
    const { herbId, rating, comment } = req.body;
    const userId = req.user;  // From the JWT token (middleware will add this)

    // Validate herbId
    const herb = await Herb.findById(herbId);
    if (!herb) {
      return res.status(404).json({ message: "Herb not found" });
    }

    // Create a new review
    const newReview = new Review({
      herb: herbId,
      user: userId,
      rating,
      comment,
    });

    await newReview.save();

    // Add the review to the herb's reviews array
    herb.reviews.push(newReview._id);
    await herb.save();

    res.status(201).json({ message: "Review created successfully", newReview });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all reviews for a specific herb
exports.getReviewsByHerb = async (req, res) => {
  try {
    const { herbId } = req.params;
    
    // Find herb and populate reviews
    const herb = await Herb.findById(herbId).populate("reviews");
    if (!herb) {
      return res.status(404).json({ message: "Herb not found" });
    }

    res.status(200).json({ reviews: herb.reviews });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a review (Admin/Content Creator)
exports.deleteReview = async (req, res) => {
  try {
    const { reviewId } = req.params;
    const userId = req.user;  // From the JWT token (middleware will add this)

    // Find the review
    const review = await Review.findById(reviewId).populate("user");
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    // Check if the user is the creator of the review or an admin
    if (review.user._id.toString() !== userId.toString() && !req.user.isAdmin) {
      return res.status(403).json({ message: "You are not authorized to delete this review" });
    }

    // Delete the review from the herb's reviews array
    const herb = await Herb.findById(review.herb);
    herb.reviews.pull(reviewId);
    await herb.save();

    // Delete the review from the database
    await review.remove();

    res.status(200).json({ message: "Review deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
