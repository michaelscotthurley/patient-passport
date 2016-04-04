var express = require('express');
var Location = require('../models/location');
var router = express.Router();

router.route('/')
  .get(function(req, res) {
    Location.find(function(err, directions) {
      if (err) return res.status(500).send(err);
      res.send(directions);
    });
  })
  .post(function(req, res) {
    Location.create(req.body, function(err, directions) {
      if (err) return res.status(500).send(err);
      res.send(directions);
    });
  });

router.route('/locations/:id')
  .get(function(req, res) {
    Location.findById(req.params.id, function(err, directions) {
      if (err) return res.status(500).send(err);
      res.send(directions);
    });
  })
  .post(function(req, res) {
    Location.create(req.body, function(err, directions) {
      if (err) return res.status(500).send(err);
      res.send(directions);
    });
  })
  .put(function(req, res) {
    Location.findByIdAndUpdate(req.params.id, req.body, function(err) {
      if (err) return res.status(500).send(err);
      res.send({'message': 'Location successfully updated.'});
    });
  })
  .delete(function(req, res) {
    Location.findByIdAndRemove(req.params.id, function(err) {
      if (err) return res.status(500).send(err);
      res.send({'message': 'Location successfully removed.'});
    });
  });

module.exports = router;