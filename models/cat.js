var db = require('../db');

var catSchema = db.Schema({
  name: String
});

module.exports = db.model('Cat', catSchema);
