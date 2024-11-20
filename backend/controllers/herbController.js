const Herb = require("../models/herbModel");

// Create a new herb (Content Creators/Admins)
exports.createHerb = async (req, res) => {
  try {
    const { name, description, category, imageUrl, videoUrl } = req.body;

    const newHerb = new Herb({
      name,
      description,
      category,
      imageUrl,
      videoUrl,
    });

    await newHerb.save();
    res.status(201).json({ message: "Herb created successfully", newHerb });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all herbs or specific herb
exports.getHerb = async (req, res) => {
  try {
    const { herbId } = req.params;
    const herb = await Herb.findById(herbId);

    if (!herb) {
      return res.status(404).json({ message: "Herb not found" });
    }

    res.status(200).json({ herb });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update herb details (Content Creators/Admins)
exports.updateHerb = async (req, res) => {
  try {
    const { herbId } = req.params;
    const { name, description, category, imageUrl, videoUrl } = req.body;

    const updatedHerb = await Herb.findByIdAndUpdate(
      herbId,
      { name, description, category, imageUrl, videoUrl },
      { new: true }
    );

    if (!updatedHerb) {
      return res.status(404).json({ message: "Herb not found" });
    }

    res.status(200).json({ message: "Herb updated successfully", updatedHerb });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete herb (Admin only)
exports.deleteHerb = async (req, res) => {
  try {
    const { herbId } = req.params;

    const deletedHerb = await Herb.findByIdAndDelete(herbId);
    if (!deletedHerb) {
      return res.status(404).json({ message: "Herb not found" });
    }

    res.status(200).json({ message: "Herb deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
