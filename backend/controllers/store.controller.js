const Book = require('../models/book.model');
var fs = require('fs');
let cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

exports.get = async (req, res, next) => {
  try {
    const books = await Book.find({ sellerId: req.user._id }).populate(
      'sellerId'
    );
    return res.status(201).json({
      books: books,
    });
  } catch (err) {
    return next({ status: 400, message: err.message });
  }
};

exports.create = async (req, res, next) => {
  try {
    if (req.file) {
      let bookPictureUrl = null;
      await cloudinary.uploader.upload(req.file.path, async (error, result) => {
        bookPictureUrl = result.url;
      });
      const newBook = await Book.create({
        sellerId: req.user._id,
        title: req.body.title,
        description: req.body.description,
        bookPictureUrl,
      });
      fs.unlinkSync(req.file.path);
      return res.status(201).json({
        newBook: newBook,
      });
    } else {
      next({ status: 400, message: 'upload ko thanh cong' });
    }
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
    const bookId = req.params.id;
    await Book.findByIdAndRemove(bookId);
    return res.status(201).json({
      isRemoved: true,
    });
  } catch (err) {
    return next({ status: 400, message: err.message });
  }
};
