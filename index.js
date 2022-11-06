var createError = require('http-errors');
var express = require('express');
var path = require('path');
const cors = require('cors');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// const passport = require('passport');
require('dotenv').config();

/* Router Trunk */
const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');
// const inventoryRouter = require('./routes/inventory');
// const promocodeRouter = require('./routes/promocode');
// const customerRouter = require('./routes/customer');
// const ordersRouter = require('./routes/orders');
// const treasurechestRouter = require('./routes/treasurechest');
// const manifesteventRouter = require('./routes/manifestevent');
// const greenhouseRouter = require('./routes/greenhouse');
// const smarthomeRouter = require('./routes/smarthome');
const publicRouter = require('./routes/public');
// const checkoutRouter = require('./routes/checkout');
// const shipstationRouter = require('./routes/shipstation');

/* connections to separate SmartHome App */
// the app itself is run on the local microcontroller(arduino Yun)
// these are the connections you want to display to the global internet
// this connection is sensitive and requires proper protection as it may
// control physical actuators and incorporate heavy equipment
// var SmartHomeRouter = require('./SmartHome');

var app = express();
// app.use(logger('dev'));
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

/* Passport Middleware */
// https://www.npmjs.com/package/passport-jwt
// app.use(passport.initialize());
// app.use(passport.session());

/* Smart Contract ABI on Ethereum or Matic or whatever suits your purposes */
// app.use('/abis/AngelToken.json', express.static('abis/AngelToken.json'));
// app.use('/abis/AT_X.json', express.static('abis/AT_X.json'));


// require('./db/passport')(passport);

// view engine setup
app.set('views', path.join(__dirname, 'BackendViews'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

/* Store Front Backend Routes */
app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/inventory', inventoryRouter);
// app.use('/promocode', promocodeRouter);
// app.use('/customer', customerRouter);
// app.use('/orders', ordersRouter);
// app.use('/shipstation', shipstationRouter);

/* Angel Token Backend Routes */
// app.use('/treasurechest', treasurechestRouter);
// app.use('/manifestevent', manifesteventRouter);

/* Smarthome Backend Routes */
// app.use('/greenhouse', greenhouseRouter);
// app.use('/smarthome', smarthomeRouter);

/* Error page gif */
// app.use('/img/bc.gif', express.static(__dirname + '/img/bc.gif'));
// app.use('/img/icons/Rarible_Logo.png', express.static(__dirname + '/img/icons/Rarible_Logo.png'));
app.use('/img', express.static('img'));

/* Locally available Node Modules */
// app.use('/css/main_style.css', express.static(__dirname + '/css/main_style.css'));
// app.use('/css/jolly_style.css', express.static(__dirname + '/css/jolly_style.css'));
app.use('/css', express.static('css'));
// app.use('/node_modules/bootstrap/dist/css/bootstrap.min.css', express.static(__dirname + '/node_modules/bootstrap/dist/css/bootstrap.min.css'));
// app.use('/node_modules/bootstrap/dist/css/bootstrap.min.css.map', express.static(__dirname + '/node_modules/bootstrap/dist/css/bootstrap.min.css.map'));
// app.use('/node_modules/jquery/dist/jquery.min.js', express.static(__dirname + '/node_modules/jquery/dist/jquery.min.js'));
// app.use('/node_modules/angular/angular.min.js', express.static(__dirname + '/node_modules/angular/angular.min.js'));
// app.use('/node_modules/angular/angular.min.js.map', express.static(__dirname + '/node_modules/angular/angular.min.js.map'));
// app.use('/node_modules/angular-route/angular-route.js', express.static(__dirname + '/node_modules/angular-route/angular-route.js'));
// app.use('/node_modules/angular-animate/angular-animate.js', express.static(__dirname + '/node_modules/angular-animate/angular-animate.js'));
// app.use('/node_modules/web3/dist/web3.min.js', express.static(__dirname + '/node_modules/web3/dist/web3.min.js'));

/* Frontend Routes*/
app.use('/public/index.html', express.static('public/index.html'));
// app.use('/public', express.static('public'));
app.use('/public', publicRouter);
// app.use('/checkout', checkoutRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;