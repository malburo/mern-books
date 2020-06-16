const Cart = require('../models/cart.model');
exports.get = async (req, res, next) => {
  try {
    const carts = await Cart.findOne({ userId: req.user._id })
      .populate('userId')
      .populate({ path: 'bookId', populate: { path: 'bookId' } });
    return res.status(201).json({
      carts: carts,
    });
  } catch (err) {
    return next({ status: 400, message: err.message });
  }
};

exports.create = async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ userId: req.user._id });
    if (!cart) {
      const newCart = await Cart.create({
        userId: req.user._id,
        bookId: [req.body.bookId],
      });
      return res.status(201).json({
        newCart: newCart,
      });
    }

    cart.bookId.push(req.body.bookId);
    cart.markModified('bookId');
    cart.save();
    return res.status(201).json({
      newCart: cart,
    });
  } catch (err) {
    return next({ status: 400, message: err.message });
  }
};
