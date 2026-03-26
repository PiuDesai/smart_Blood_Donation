// routes/notifications.js
const express = require("express");
const router = express.Router();
const User = require("../models/UserModel.js");

router.post("/save-token", async (req, res) => {
  try {
    const { userId, pushToken } = req.body;
    await User.findByIdAndUpdate(userId, { pushToken });
    res.status(200).json({ message: "Token saved successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to save token" });
  }
});

module.exports = router;