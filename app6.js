const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Inicio app6');
})

app.get('/hola-mundo', function(req, res) {
    res.send('Hola mundo con respectiva ruta app6');
})

app.get('*', function(req, res) {
    res.send('404 | Page not found');
})

app.listen(8000);

console.log('Puerto funcionando en', 8000);