const express = require('express');
const app = express();

const port = 8000;

app.get('/', function(req, res) {
    res.send('Inicio app7');
})

app.get('/hola-mundo', function(req, res) {
    res.send('Hola mundo con respectiva ruta');
})

app.get('*', function(req, res) {
    res.send('404 | Page not found');
})

app.listen(port, ()=> {
    console.log(`Example app listening at http://localhost:${port}`);
});

// console.log('Puerto funcionando en', 8000);