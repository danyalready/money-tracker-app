const { db } = require("../utils/admin");

exports.getTransactions = (req, res) => {
  db.collection("transactions")
    .get()
    .then(data => {
      let transactions = [];
      data.forEach(doc => {
        transactions.push({
          id: doc.id,
          product: doc.data()
        });
      });
      return res.status(200).json(transactions);
    })
    .catch(err => {
      return res.status(404).json({ error: err.code });
    });
};

exports.addTransaction = (req, res) => {
  const transaction = {};
};
