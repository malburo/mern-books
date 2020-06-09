const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.auth = async (req, res, next) => {
  try {
    return res.status(201).json({
      user: req.user,
    });
  } catch (err) {
    return next({ status: 400, message: err.message });
  }
};

exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(400).json({
        username: 'Username không tồn tại',
      });
    }
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) {
      return res.status(400).json({
        password: 'Password không đúng',
      });
    }
    delete user._doc.password;
    const accessToken = jwt.sign(user._doc, process.env.SECRET);
    res.json({ user, accessToken });
  } catch (err) {
    return next({
      status: 400,
      message: err.message,
    });
  }
};

exports.reset = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({
        message: 'Email không tồn tại',
      });
    }
    res.json({ message: 'Đã gửi email' });
  } catch (err) {
    res.status(400).json(`Error: ${err}`);
  }
};
