const express = require("express");
const router = express.Router();

const {
  registerBloodBank,
  loginBloodBank,
  getBloodBankProfile
} = require("../controller/bloodBankController");

const authMiddleware = require("../middleware/authMiddleware");


// 🔴 Register
router.post("/register", registerBloodBank);

// 🔴 Login
router.post("/login", loginBloodBank);

// 🔴 Profile (Protected Route)
router.get("/profile", authMiddleware, getBloodBankProfile);

module.exports = router;