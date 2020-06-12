const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: String,
    role: {
      type: String,
      default: 'member',
    },
    wrongLoginCount: {
      type: Number,
      default: 0,
    },
    profilePictureUrl: {
      type: String,
      default:
        'https://scontent.fsof4-1.fna.fbcdn.net/v/t1.30497-1/c71.0.240.240a/p240x240/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&_nc_sid=7206a8&_nc_ohc=CD3ImewvDlgAX8f-QvY&_nc_ht=scontent.fsof4-1.fna&oh=782172992e9272da49f35f7f40ef8d63&oe=5EED0201',
    },
  },
  {
    timestamps: true,
  }
);

userSchema.virtual('books', {
  ref: 'books',
  localField: '_id',
  foreignField: 'sellerId',
});

var User = mongoose.model('users', userSchema);

module.exports = User;
