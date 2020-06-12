const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'books' },
    isComplete: {
      type: Number,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

var Transaction = mongoose.model('transactions', transactionSchema);

module.exports = Transaction;
