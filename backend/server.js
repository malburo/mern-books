require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const path = require('path');

const authRouter = require('./routes/auth.route');
const userRouter = require('./routes/user.route');
const bookRouter = require('./routes/book.route');
const transactionRouter = require('./routes/transaction.route');
const app = express();

app.use(cors());
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected');
});
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/books', bookRouter);
app.use('/api/transactions', transactionRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}
app.use((err, req, res, next) => {
  res.status(400).json(err);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
