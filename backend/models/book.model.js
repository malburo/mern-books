const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  userId: String,
  title: String,
  decription: String,
  bookPictureUrl: String,
});

var Book = mongoose.model('books', bookSchema);

module.exports = Book;
