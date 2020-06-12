const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
  title: String,
  decription: String,
  bookPictureUrl: String,
});

var Book = mongoose.model('books', bookSchema);

module.exports = Book;
