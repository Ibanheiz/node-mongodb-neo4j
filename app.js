var express = require('express');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var compress = require('compression');
var routes = require('./routes')(express);
var api = {};
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(compress());
app.use(morgan('dev'));
app.use(cookieParser());
app.use('/', routes);

module.exports = app;
