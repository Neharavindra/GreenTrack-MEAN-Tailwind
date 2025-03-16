const mongoose = require("mongoose");

const CarbonDataSchema = new mongoose.Schema({
  activity: { type: String, required: true },  // e.g., "Car Travel", "Electricity Usage"
  carbonEmissions: { type: Number, required: true },  // Carbon footprint in kg CO2
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("CarbonData", CarbonDataSchema);
