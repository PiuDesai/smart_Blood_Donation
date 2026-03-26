const mongoose = require("mongoose");

const campSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    registeredDonors: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Donor"
        }
    ]
}, { timestamps: true });

module.exports = mongoose.model("Camp", campSchema);