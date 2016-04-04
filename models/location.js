var mongoose = require('mongoose');

var LocationSchema = new mongoose.Schema({
  department: String,
  service: String,
  location: String,
  direction_text1: String,
  direction_image1: String,
  direction_text2: String,
  direction_image2: String,
  direction_text3: String,
  direction_image3: String,
  direction_text4: String,
  direction_image4: String,
});

module.exports = mongoose.model('Location', LocationSchema);