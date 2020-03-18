const functions = require("firebase-functions");
const app = require("express")();
const cors = require("cors");

app.use(cors());

const { signIn, signUp } = require("./handlers/users");
const { getTransactions } = require("./handlers/transactions");
const { fbAuth } = require("./utils/fbAuth");
app.post("/signIn", signIn);
app.post("/signUp", signUp);

// APIs for authenticated users
app.get("/transactions", fbAuth, getTransactions);

exports.api = functions.region("europe-west2").https.onRequest(app);
