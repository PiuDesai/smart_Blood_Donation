const BloodBank = require("../models/BloodBank");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// 🔴 Register Blood Bank
exports.registerBloodBank = async (req, res) => {
  try {
    const { name, email, password, location } = req.body;

    // check if already exists
    const existing = await BloodBank.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Blood bank already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create blood bank
    const bloodBank = await BloodBank.create({
      name,
      email,
      password: hashedPassword,
      location
    });

    res.status(201).json({
      message: "Blood bank registered successfully",
      bloodBank
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// 🔴 Login Blood Bank
exports.loginBloodBank = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check user
    const bloodBank = await BloodBank.findOne({ email });
    if (!bloodBank) {
      return res.status(404).json({ message: "Blood bank not found" });
    }

    // compare password
    const isMatch = await bcrypt.compare(password, bloodBank.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // create token
    const token = jwt.sign(
      { id: bloodBank._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      message: "Login successful",
      token,
      bloodBank
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// 🔴 Get Profile (Protected)
exports.getBloodBankProfile = async (req, res) => {
  try {
    const bloodBank = await BloodBank.findById(req.user.id).select("-password");
    res.json(bloodBank);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};