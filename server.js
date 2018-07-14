// zaleznosci pobrane:
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs')
// deklaracja zmiennej app
var app = express();
var stringifyFile;

// pozwala uzyc body-parser(pozwala korzysta z formatu application/json)
app.use(bodyParser.json());

app.get('/getNote', function(req, res) {
  // ta funkcja wywola sie po zaladowaniu
  fs.readFile('./test.json', 'utf-8', function(err, data) {
    if (err) throw err;
    stringifyFile = data;
    res.send(data);
  });
});

//funkcja nadpisujaca zawartosc test.json (localhost:3000/updateNote/test)
app.post('/updateNote/:note', function(req, res) {
  stringifyFile += req.params.note //?dlaczego tu a nie w fs.writeFile?

  fs.writeFile('./test2.json', stringifyFile, function(err) {
    if (err) throw err;
    console.log('file updated');
    res.send(stringifyFile);
  })
})

app.listen(3000);
