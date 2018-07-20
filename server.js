var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs')

var app = express();
//global variable
var stringifyFile;

app.use(bodyParser.json());

app.use('/', function(req, res, next) {
  fs.readFile('./test.json', 'utf-8', function(err, data) {             
   if (err) throw err;
   stringifyFile = data;
   next();
  });
});

app.get('/getNote', function(req, res) {
    res.send(stringifyFile);
});

app.post('/updateNote/:note', function(req, res) {
  stringifyFile += req.params.note
  fs.writeFile('./test.json', stringifyFile, function(err) {
    if (err) throw err;
    console.log('file updated');
    res.send(stringifyFile);
  })
})

app.listen(3000);
