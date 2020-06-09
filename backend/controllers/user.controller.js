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


