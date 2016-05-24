var express = require('express');
var router = express.Router();
var Cat = require('../models/cat');
var Promise = require('bluebird');

function findCats() {
  return new Promise(function(resolve, reject) {
    Cat.find({}, function(err, cats) {
      if (err) {
        reject(err);
      }
      resolve(cats);
    });
  });
}

function saveCats(name) {
  return new Promise(function(resolve, reject) {
    var cat = new Cat({
      name: name
    });

    cat.save(function(err, cat) {
      if (err) {
        reject(err);
      }
      resolve(cat);
    });
  });
}

router.get('/', function(req, res) {
  findCats().then(function(cats) {
    res.send(cats);
  });
});

router.post('/', function(req, res) {
  var name = req.body.name;
  saveCats(name).then(function(cat) {
    res.send(cat);
  });
});

module.exports = router;
