// należy zadeklarować zmienną, w której będziemy przechowywać funkcjonalności pakietu Expressa
var express = require('express');
// stworzenie aplikacji Express
var app = express();

//rejestracja obsluge ROUTINGU
// gdy aplikacja odbierze zadanie GET po wejsciu na strone domowa '/'
app.get('/', function(req, res) {
  // jako callbac na wystapienie tego zdarzenia wywolana jest funkcjonalności
  // ktora gdy odpowiedz jest udana(nie wystapi blad) wyswietli "hello world"
  res.send('Hello world');
});

// Inisjacja nasluchiwania serwera na zdarzenia(wszytkie)
// widoczne w conosli ubuntu("Przykladowa aplikacja...")
var server = app.listen(3000, function() {
  console.log('Przykładowa aplikacja nasłuchuje na http://localhost:3000');
});
