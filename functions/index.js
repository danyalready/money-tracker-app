const functions = require("firebase-functions");
const app = require("express")();
const cors = require("cors");

app.use(cors());

const { signIn, signUp, getUser } = require("./handlers/users");
const {
  getTransactions,
  addTransaction,
  deleteTransaction
} = require("./handlers/transactions");
const fbAuth = require("./utils/fbAuth");
app.post("/signIn", signIn);
app.post("/signUp", signUp);
app.get("/user", fbAuth, getUser);

// APIs for authenticated users
app.get("/transactions", fbAuth, getTransactions);
app.post("/transactions", fbAuth, addTransaction);
app.delete("/transactions/:transactionId", fbAuth, deleteTransaction);

exports.api = functions.region("europe-west2").https.onRequest(app);
