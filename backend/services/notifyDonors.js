// services/notifyDonors.js
const sendPushNotification = require("./pushNotification");
const User = require("../models/Notification");

const notifyNearbyDonors = async (bloodGroup, location, message) => {
  const donors = await User.find({
    bloodGroup,
    "location.city": location,
    role: "donor"
  });

  console.log("Donors found:", donors.length);

  donors.forEach(donor => {
    if (donor.fcmToken) {
      console.log("Sending push to:", donor.fcmToken);
      sendPushNotification(donor.fcmToken, message);
    } else {
      console.log("No push token for:", donor._id);
    }
  });
};

module.exports = { notifyNearbyDonors };