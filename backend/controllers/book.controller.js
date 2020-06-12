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
    const { sellerId, title, decription } = req.body;
    const newBook = await Book.create({ sellerId, title, decription });
    return res.status(201).json({
      newBook: newBook,
    });
  } catch (err) {
    return next({ status: 400, message: err.message });
  }
};
