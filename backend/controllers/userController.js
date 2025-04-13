const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const Herb = require("../models/herbModel");
const { token } = require("morgan");
const mongoose = require("mongoose");

// User Registration
exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });

    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// User Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.status(200).json({ token, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


// User Logout
exports.logout = async (req, res) => {
  try {
    // Instruct the client to remove the token (optional response)
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getUserProfile = async (req, res) => {
  try {
    // Access the userId from the decoded token attached to req.userId
    const userId = req.userId;
    console.log(req.token);

    if (!userId) {
      return res.status(404).json({ message: "User not found" });
    }

    // Find the user by the userId, excluding the password field
    const userdata = await User.findOne({ _id: userId }).select("-password");

    if (!userdata) {
      return res.status(404).json({ message: "User not found in the database" });
    }

    // Attach the token to the user data object
    // userdata.token = req.token;

    // Return the user data in the response
    res.status(200).json( userdata);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// bookmark
exports.bookmark = async (req, res) => {
  try {
    const { userId, plantId } = req.body; // Ensure variables are destructured after declaration
    console.log(req.body)
    // Validate input
    if (!userId || !plantId) {
      return res.status(400).json({ message: "User ID and Herb ID are required" });
    }

    // Add your bookmarking logic here
    // Example:
    const user = await User.findById(userId); // Replace with your DB logic
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Assuming user.bookmarks is an array
    if (user.bookmarks.includes(plantId)) {
      return res.status(400).json({ message: "Herb already bookmarked" });
    }

    user.bookmarks.push(plantId);
    await user.save();

    res.status(200).json({ message: "Bookmark added successfully", bookmarks: user.bookmarks });
  } catch (error) {
    console.error("Error in bookmark function:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getUserBookmarks = async (req, res) => {
  try {
    // Assuming the user is authenticated and their user id is stored in the request
    console.log(req.body , "lucky")
    const userId = req.user._id;  // If using JWT authentication, retrieve the user from req.user

    const user = await User.findById(userId); // Populate the 'bookmarks' field with Herb data

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Return the populated bookmarks (Herb data)
    res.status(200).json(user.bookmarks);
  } catch (error) {
    console.error("Error fetching bookmarks:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.removebookmark= async (req, res) => {
  try {
    const { userId, plantId } = req.body;

    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Filter out the plantId from user's bookmarks
    user.bookmarks = user.bookmarks.filter((id) => id.toString() !== plantId);

    // Save the updated user
    await user.save();

    // Respond with success
    res.json({ success: true, message: "Bookmark removed successfully" });
  } catch (error) {
    console.error("Error in removeBookmark:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

exports.getCount =  async (req, res) => {
  try {
      const contentCreatorCount = await User.countDocuments({ role: 'content-creator' }); // Adjust field name if different
      const userCount = await User.countDocuments({ role: 'user' });
      const adminCount = await User.countDocuments({ role: 'admin' });

      res.status(200).json({
          contentCreators: contentCreatorCount,
          users: userCount,
          admins: adminCount
      });
  } catch (err) {
      res.status(500).json({ error: 'Failed to fetch counts' });
  }
};


// fetch all users data 

exports.userData = async (req, res) => {
  try {
      const users = await User.find({
        role: { $in: ['user', 'content-creator'] }, // Filter for 'user' and 'content-creator'
    });
      res.status(200).json(users);
  } catch (err) {
      res.status(500).json({ error: 'Failed to fetch users' });
  }
};


// Exporting the functions after they are declared
// module.exports = { register, login };
