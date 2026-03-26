// routes/bloodRequest.js
const express = require("express");
const router = express.Router();
const BloodRequest = require("../models/BloodRequest");
const { notifyNearbyDonors } = require("../services/notifyDonors");

// Route to create a new blood request
router.post("/create", async (req, res) => {
  try {
    const { patientName, patientId, bloodGroup, unitsNeeded, location } = req.body;

    // Save the blood request in DB
    const newRequest = await BloodRequest.create({
      patientName,
      patientId,
      bloodGroup,
      unitsNeeded,
      location,
    });

    // Trigger notifications to nearby donors
    await notifyNearbyDonors(
      bloodGroup,
      location,
      `Urgent! ${bloodGroup} blood needed near you. Please help!`
    );

    res.status(200).json({
      message: "Blood request created and donors notified",
      bloodRequest: newRequest,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create blood request" });
  }
});

module.exports = router;