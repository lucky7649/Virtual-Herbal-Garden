const express = require("express");
const {
  createHerb,
  getHerb,
  updateHerb,
  deleteHerb,
} = require("../controllers/herbController");
const authenticateUser = require("../middleware/authMiddleware");
const { isAdmin, isContentCreator } = require("../middleware/adminMiddleware");

const router = express.Router();

// POST routes for creating and updating herbs (Content Creators/Admins)
router.post("/herbs", authenticateUser, isContentCreator, createHerb);
router.put("/herbs/:herbId", authenticateUser, isContentCreator, updateHerb);

// GET route to view a single herb
router.get("/herbs/:herbId", getHerb);

// DELETE route for admins to remove a herb
router.delete("/herbs/:herbId", authenticateUser, isAdmin, deleteHerb);

module.exports = router;
