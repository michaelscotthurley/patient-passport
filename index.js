var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

var mongoose = require('mongoose');
var Location = require('./models/location');
var mongodbUri = process.env.MONGOLAB_URI;
mongoose.connect(mongodbUri || mongodb:"//localhost/patient-passport");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public/'));

app.use('/api/locations', require('./controllers/locations'));

app.get('/*', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(process.env.port || 3000);

