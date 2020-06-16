const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    bookId: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'books', default: [] },
    ],
  },
  {
    timestamps: true,
  }
);

var Book = mongoose.model('carts', cartSchema);

module.exports = Book;
