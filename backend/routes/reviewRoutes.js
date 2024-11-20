const express = require("express");
const { createReview, getReviewsByHerb, deleteReview } = require("../controllers/reviewController");
const authenticateUser = require("../middleware/authMiddleware");
const { isAdmin, isContentCreator } = require("../middleware/adminMiddleware");

const router = express.Router();

// POST route for creating a new review (authenticated users)
router.post("/reviews", authenticateUser, createReview);

// GET route for fetching all reviews for a specific herb
router.get("/herbs/:herbId/reviews", getReviewsByHerb);

// DELETE route for deleting a review (Admin/Content Creator)
router.delete("/reviews/:reviewId", authenticateUser, deleteReview);

module.exports = router;
