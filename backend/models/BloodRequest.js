// models/BloodRequest.js
const mongoose = require("mongoose");

const bloodRequestSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  bloodGroup: { type: String, required: true },
  unitsNeeded: { type: Number, required: true },
  location: { type: String, required: true },
  status: { type: String, default: "pending" }, // pending, accepted, completed
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("BloodRequest", bloodRequestSchema);