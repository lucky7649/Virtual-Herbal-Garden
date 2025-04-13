const User = require("../models/userModel");

const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user);  // Get the user from the database using userId attached by authMiddleware
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.role !== 'admin') {
      return res.status(403).json({ message: "Access denied. Admins only" });
    }

    // Continue to the next middleware or route handler if the user is an admin
    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const isContentCreator = async (req, res, next) => {
  try {
    const user = await User.findById(req.user);  // Get the user from the database using userId
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.role !== 'content-creator' && user.role !== 'admin') {
      return res.status(403).json({ message: "Access denied. Only Content Creators and Admins can access this" });
    }

    // Continue to the next middleware or route handler if the user is a content creator or admin
    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { isAdmin, isContentCreator };
