//endpointy dynamiczne (:something)
var express = require('express');
var app = express();

// req - obiekt zapytania HTTP, posiada on parametry(np.body,naglowki,params)
app.get('/:id', function (req, res) {
    res.send('Identyfikator, który został dopisany to ' + req.params.id);
});

// var server = app.listen(3000, function() {
//     console.log('Przykładowa aplikacja nasłuchuje na http://localhost:3000');
// });
app.listen(3000);
