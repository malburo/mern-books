const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
  title: String,
  decription: String,
  bookPictureUrl: {
    type: String,
    default:
      'https://res.cloudinary.com/malburo/image/upload/v1588082666/book_j9pihg.jpg',
  },
});

var Book = mongoose.model('books', bookSchema);

module.exports = Book;
