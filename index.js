var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

var mongoose = require('mongoose');
var Location = require('./models/location');
// var mongodbUri = process.env.MONGO;
mongoose.connect('mongodb://heroku_rwcx0qxr:skru4qatmmjr9i92ajatq7lqlq@ds011218.mlab.com:11218/heroku_rwcx0qxr');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public/'));

app.use('/api/locations', require('./controllers/locations'));

app.get('/*', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT || 3000)

