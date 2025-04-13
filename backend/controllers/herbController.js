const Herb = require("../models/herbModel");
const router = require("../routes/userRoutes");

// Create a new herb (Content Creators/Admins)
exports.createHerb = async (req, res) => {
  try {
    const {
      name,
      scientificName,
      description,
      image,
      botanicalInfo,
      physicalDescription,
      habitat,
      medicinalMethod,
      conventionalComposition,
      chemicalComposition,
      pharmacologicalEffect,
      clinicalStudies,
      safetyPrecautions,
      culturalSignificance,
      plantSuccess,
      referenceLink,
      _3DId, // New field
    } = req.body;

    const newHerb = new Herb({
      name,
      scientificName,
      description,
      image,
      botanicalInfo,
      physicalDescription,
      habitat,
      medicinalMethod,
      conventionalComposition,
      chemicalComposition,
      pharmacologicalEffect,
      clinicalStudies,
      safetyPrecautions,
      culturalSignificance,
      plantSuccess,
      referenceLink,
      _3DId, // Include in creation
    });

    await newHerb.save();
    res.status(201).json({ message: "Herb created successfully", newHerb });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all herbs or a specific herb
exports.getHerb = async (req, res) => {
  try {
    const { herbId } = req.params;

    if (herbId) {
      const herb = await Herb.findById(herbId);
      if (!herb) {
        return res.status(404).json({ message: "Herb not found" });
      }
      return res.status(200).json({ herb });
    } else {
      const herbs = await Herb.find(); // Fetch all herbs
      return res.status(200).json( herbs );
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update herb details (Content Creators/Admins)
exports.updateHerb = async (req, res) => {
  try {
    const { herbId } = req.params;
    const updates = req.body; // Allow partial updates

    const updatedHerb = await Herb.findByIdAndUpdate(herbId, updates, {
      new: true, // Return the updated document
    });

    if (!updatedHerb) {
      return res.status(404).json({ message: "Herb not found" });
    }

    res
      .status(200)
      .json({ message: "Herb updated successfully", updatedHerb });
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

exports.herbb =  async (req, res) => {
  const { ids } = req.query; // Get the IDs from the query string
  try {
    if (ids && Array.isArray(ids)) {
      const plants = await Herb.find({
        '_id': { $in: ids }, // Find plants where their _id is in the provided list
      });

      if (plants.length === 0) {
        return res.status(404).json({ message: 'No plants found for the provided IDs.' });
      }
      return res.json(plants);
    } else {
      return res.status(400).json({ message: 'Invalid or missing plant IDs.' });
    }
  } catch (error) {
    console.error('Error fetching plants:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};
