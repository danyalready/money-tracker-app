var admin = require("firebase-admin");

var serviceAccount = require("../config/ServiceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://moneytrackerapp-0000.firebaseio.com"
});

const db = admin.firestore();

module.exports = { admin, db };
