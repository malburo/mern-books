const Transaction = require('../models/transaction.model');

exports.get = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();
    return res.status(201).json({
      transactions: transactions,
    });
  } catch (err) {
    return next({ status: 400, message: err.message });
  }
};

exports.create = async (req, res, next) => {
  try {
    const { userId, bookId } = req.body;
    const newTransaction = await Transaction.create({ userId, bookId });
    return res.status(201).json({
      newTransaction: newTransaction,
    });
  } catch (err) {
    return next({ status: 400, message: err.message });
  }
};
exports.complete = async (req, res, next) => {
  try {
    const { transactionId } = req.body;
    const completeTransaction = await Transaction.findByIdAndUpdate(
      transactionId,
      { isComplete: true }
    );
    return res.status(201).json({
      transaction: completeTransaction,
    });
  } catch (err) {
    return next({ status: 400, message: err.message });
  }
};
exports.delete = async (req, res, next) => {
  try {
    const { transactionId } = req.body;
    await Transaction.findByIdAndRemove(transactionId);
    return res.status(201).json({
      isRemoved: true,
    });
  } catch (err) {
    return next({ status: 400, message: err.message });
  }
};
