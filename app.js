var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongooseContion = require('./config/mongo')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user/user');
var session = require('express-session')
var classRouter = require('./routes/class/class');
var articlerouter = require('./routes/articles/articles')
var articleviews = require('./routes/articleview/articleview')
var app = express();
//session配置
app.use(session({
  secret: 'xdw',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false
  }
}))
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').__express)
app.set('view engine', 'html')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//引用的二级路由
app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/user/class', classRouter)
app.use('/user/article', articlerouter)
app.use('/user/articleview', articleviews)
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;