var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs')

var app = express();
var stringifyFile;

app.use(bodyParser.json());

app.get('/getNote', function(req, res) {
  fs.readFile('./test.json', 'utf-8', function(err, data) {
    if (err) throw err;
    stringifyFile = data;
    res.send(data);
  });
});

app.post('/updateNote/:note', function(req, res) {
  stringifyFile += req.params.note //?nie w fs.writeFile?
  // console.log(stringifyFile);
  // console.log("Teraz jest w POST i stringiFIle to:" + stringifyFile);
  fs.writeFile('./test.json', stringifyFile, function(err) {
    if (err) throw err;
    console.log('file updated');
    // console.log('file updated');
    res.send(stringifyFile);
    // console.log(stringifyFile);
  })
})

app.listen(3000);
