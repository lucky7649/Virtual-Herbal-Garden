const User = require("../models/userModel");
const Herb = require("../models/herbModel");

const bookmarkHerb = async (userId, herbId) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    const herb = await Herb.findById(herbId);
    if (!herb) {
      throw new Error("Herb not found");
    }

    // Add herb to bookmarks if not already bookmarked
    if (!user.bookmarks.includes(herbId)) {
      user.bookmarks.push(herbId);
      await user.save();
      console.log("Herb bookmarked successfully");
    } else {
      console.log("Herb already bookmarked");
    }
  } catch (error) {
    console.error(error);
  }
};

// Example usage
// const userId = "someUserId";
// const herbId = "someHerbId";
// bookmarkHerb(userId, herbId);
