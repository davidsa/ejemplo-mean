var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/plantanga', function() {
  console.log("mongodb connected");
});

module.exports = mongoose;
