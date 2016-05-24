var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./db');

app.use(bodyParser.json());

app.use('/', express.static('app'));
app.use('/api', require('./controllers/measure'));

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
