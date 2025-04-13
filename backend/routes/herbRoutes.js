const express = require("express");
const {
  createHerb,
  getHerb,
  updateHerb,
  deleteHerb,
  herbb
} = require("../controllers/herbController");
const authenticateUser = require("../middleware/authMiddleware");
const { isAdmin, isContentCreator } = require("../middleware/adminMiddleware");

const router = express.Router();

// POST routes for creating and updating herbs (Content Creators/Admins)
router.post("/herbs", authenticateUser, isContentCreator, createHerb);
router.put("/herbs/:herbId", authenticateUser, isContentCreator, updateHerb);

// GET route to view a single herb
router.get("/herbs/:herbId", getHerb);

router.get("/herbs", getHerb); // all herbs 

// DELETE route for admins to remove a herb
router.delete("/herbs/:herbId", authenticateUser, isAdmin, deleteHerb);

router.get('/herbb', herbb);

module.exports = router;
