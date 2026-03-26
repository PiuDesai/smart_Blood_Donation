const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware"); 

const { 
    createCamp, 
    getCamps, 
    updateCamp, 
    deleteCamp,
    registerDonor 
} = require("../controller/campController");

// Test route
router.get("/test", (req, res) => {
    res.send("Camp route works!");
});

// Protected CRUD routes
router.post("/create", auth, createCamp);
router.get("/all", auth, getCamps);
router.put("/update/:id", auth, updateCamp);
router.delete("/delete/:id", auth, deleteCamp);
router.post("/register-donor", auth, registerDonor);

module.exports = router;