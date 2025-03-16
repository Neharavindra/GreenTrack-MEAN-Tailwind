const express = require("express");
const CarbonData = require("../models/CarbonData");

const router = express.Router();

// Add Carbon Footprint Data (No Authentication)
router.post("/", async (req, res) => {
  try {
    const { activity, carbonEmissions, userId } = req.body;
    if (!activity || !carbonEmissions) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newEntry = new CarbonData({
      activity,
      carbonEmissions,
      date: new Date(),
    });

    await newEntry.save();
    res.status(201).json({ message: "Carbon data added successfully", data: newEntry });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

// Get Carbon Footprint Data (Public Access)
router.get("/", async (req, res) => {
  try {
    const data = await CarbonData.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

// Delete Carbon Data Entry (No Authentication)
router.delete("/:id", async (req, res) => {
  try {
    const deletedEntry = await CarbonData.findByIdAndDelete(req.params.id);
    if (!deletedEntry) {
      return res.status(404).json({ message: "Entry not found" });
    }
    res.json({ message: "Carbon data deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

module.exports = router;
