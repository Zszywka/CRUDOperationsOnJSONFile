var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello world');
});

var server = app.listen(3000, function() {
    console.log('Przykładowa aplikacja nasłuchuje na http://localhost:3000');
});

// obsluga odpowiedzi 404
// parametr next to funkcja, ktora pozwala isc dalej lub zakonczyc zadanie
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});
//gdy serwer nie może przetworzyć zapytania
app.use(function (req, res, next) {
    res.status(400).send('bad request')
});
//gdy wymagane jest uwierzytelnienie, a nie zostało dostarczone
app.use(function (req, res, next) {
    res.status(401).send('unauthorized')
});
//żądanie jest poprawne, jednak serwer odmawia odpowiedzi,
app.use(function (req, res, next) {
    res.status(403).send('forbidden')
});
// zasoby nie zostały znalezione
app.use(function (req, res, next) {
    res.status(404).send('not found')
});
// gdy występują nieznane warunki i nie ma żadnej konkretnej wiadomości
app.use(function (req, res, next) {
    res.status(500).send('internal server error')
});
