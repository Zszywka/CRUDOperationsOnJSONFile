// należy zadeklarować zmienną, w której będziemy przechowywać funkcjonalności pakietu Expressa
var express = require('express');
// stworzenie aplikacji Express
var app = express();

//rejestracja obsluge ROUTINGU
// gdy aplikacja odbierze zadanie GET po wejsciu na strone domowa '/'
app.get('/', function(req, res) {
  // jako callbac na wystapienie tego zdarzenia wywolana jest funkcjonalności
  // ktora gdy odpowiedz jest udana(nie wystapi blad) wyswietli "hello world"
  res.send('Hello GET');
  console.log('Otrzymałem żądanie GET do strony głównej');
});

app.post('/', function (req, res) {
    console.log('Otrzymałem żądanie POST do strony głównej');
    res.send('Hello POST!');
});

app.delete('/del_user', function (req, res) {
    console.log('Otrzymałem żądanie DELETE do strony /del_user');
    res.send('Hello DELETE!');
});

app.get('/list_user', function (req, res) {
    console.log('Otrzymałem żądanie GET do strony /list_user');
    res.send('Strona z listą użytkowników!');
});

app.get('/ab*cd', function(req, res) {
    console.log('Otrzymałem żądanie GET do strony /ab*cd');
    res.send('Wzór pasuje');
});

// Inisjacja nasluchiwania serwera na zdarzenia(wszytkie)
// widoczne w conosli ubuntu("Przykladowa aplikacja...")
var server = app.listen(3000, function() {
  console.log('Przykładowa aplikacja nasłuchuje na http://localhost:3000');
});
