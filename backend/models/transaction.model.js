const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema(
  {
    userId: String,
    bookId: String,
    isComplete: Boolean,
  },
  {
    timestamps: true,
  }
);

var Transaction = mongoose.model('transactions', transactionSchema);

module.exports = Transaction;
