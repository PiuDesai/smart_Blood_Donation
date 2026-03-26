// services/pushNotification.js
const admin = require("firebase-admin");
const serviceAccount = require("../firebaseKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const sendPushNotification = async (token, message) => {
  try {
    const payload = {
      notification: {
        title: "Blood Donation Alert",
        body: message,
      },
    };
    await admin.messaging().sendToDevice(token, payload);
    console.log("Push notification sent!");
  } catch (err) {
    console.error("Push notification failed:", err);
  }
};

module.exports = sendPushNotification;