const express = require('express');

const mongoose = require('mongoose');
const { errors } = require('celebrate');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter = require('./routes/user');
const cardRouter = require('./routes/card');
const auth = require('./middlewares/auth');
const { login, createUser } = require('./controllers/users');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { signupValidator, signinValidator } = require('./utils/validation');
const NotFoundError = require('./errors/notFoundError');

const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://127.0.0.1:27017/mestodb');

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.post('/signin', signinValidator, login);
app.post('/signup', signupValidator, createUser);

app.use(auth);

app.use('/users', userRouter);
app.use('/cards', cardRouter);

app.use('/', (req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

app.use(errorLogger);

app.use(errors());

app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res
    .status(statusCode)
    .send({
      message: statusCode === 500
        ? 'На сервере произошла ошибка' : message,
    });
  next();
});

app.listen(PORT);
