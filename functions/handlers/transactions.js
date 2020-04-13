const { db } = require("../utils/admin");

exports.getTransactions = (req, res) => {
  db.collection("transactions")
    .where("author", "==", req.user.uid)
    .get()
    .then((data) => {
      let transactions = [];
      data.forEach((doc) => {
        transactions.push({
          id: doc.id,
          transaction: doc.data(),
        });
      });
      return res.status(200).json(transactions);
    })
    .catch((err) => res.status(404).json({ error: err.code }));
};

exports.addTransaction = (req, res) => {
  const transaction = {
    amount: req.body.amount,
    date: req.body.date,
    name: req.body.name,
    type: req.body.type,
    description: req.body.description,

    author: req.user.uid,
    createdAt: new Date().toISOString(),
  };
  db.collection("transactions")
    .add(transaction)
    .then((doc) => res.status(201).json({ message: "Transaction created" }))
    .catch((err) => res.status(400).json({ error: err.code }));
};

exports.deleteTransaction = (req, res) => {
  const transactionId = req.params.transactionId;
  db.collection("transactions")
    .doc(transactionId)
    .delete()
    .then(() => res.status(200).json({ message: "Transaction deleted" }))
    .catch((err) => res.status(500).json({ error: err.code }));
};
