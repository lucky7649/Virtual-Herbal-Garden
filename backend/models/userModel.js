const mongoose = require("mongoose");

// Import the Herb model for reference
const Herb = require("./herbModel");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "content-creator", "user"],
      default: "user",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    // Bookmarks array storing references to Herb documents
    bookmarks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Herb",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
