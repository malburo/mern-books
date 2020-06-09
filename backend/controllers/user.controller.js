const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res, next) => {
  try {
    const saltRounds = 10;
    const { fullname, username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    let newUser = await User.create({
      fullname,
      username,
      email,
      password: hashedPassword,
    });
    delete newUser._doc.password;
    const accessToken = jwt.sign(newUser._doc, process.env.SECRET);
    return res.status(201).json({
      user: newUser,
      accessToken,
    });
  } catch (err) {
    return next({ status: 400, message: err.message });
  }
};

exports.resetPassword = async (req, res) => {
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
