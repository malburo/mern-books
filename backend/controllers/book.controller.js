const Book = require('../models/book.model');

exports.get = async (req, res, next) => {
  try {
    const books = await Book.find();
    return res.status(201).json({
      books: books,
    });
  } catch (err) {
    return next({ status: 400, message: err.message });
  }
};

exports.create = async (req, res, next) => {
  try {
    const newBook = await Book.create(req.body);
    return res.status(201).json({
      newBook: newBook,
    });
  } catch (err) {
    return next({ status: 400, message: err.message });
  }
};

exports.update = async (req, res, next) => {
  try {
    const { bookId } = req.body;
    const newBook = await Book.findByIdAndUpdate(bookId, req.body);
    return res.status(201).json({
      newBook: newBook,
    });
  } catch (err) {
    return next({ status: 400, message: err.message });
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { bookId } = req.body;
    await Book.findByIdAndRemove(bookId);
    return res.status(201).json({
      isRemoved: true,
    });
  } catch (err) {
    return next({ status: 400, message: err.message });
  }
};
