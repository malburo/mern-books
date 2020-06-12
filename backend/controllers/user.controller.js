const User = require('../models/user.model');

exports.get = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(201).json({
      users: users,
    });
  } catch (err) {
    return next({ status: 400, message: err.message });
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { userId } = req.body;
    await User.findByIdAndRemove(userId);
    return res.status(201).json({
      isRemoved: true,
    });
  } catch (err) {
    return next({ status: 400, message: err.message });
  }
};
