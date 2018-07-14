// zaleznosci pobrane:
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs')
// deklaracja zmiennej app
var app = express();
var stringifyFile;

// pozwala uzyc body-parser(pozwala korzysta z formatu application/json)
app.use(bodyParser.json());

app.get('/getNote', function (req, res) {
  fs.readFile('./test.json', 'utf-8', function(err, data) {
    if (err) throw err;
    stringifyFile = data;
    res.send(data);
  });
});

app.listen(3000);
