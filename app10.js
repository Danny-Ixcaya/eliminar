const express = require('express');
const app = express();
const port = 8000;

app.use(express.static('public2'))

app.get('/', function(req, res) {
    res.send('Inicio');
});

app.get('/hola-mundo', function(req, res) {
    res.send('Hola mundo con respectiva ruta');
});

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, ()=> {
    console.log(`Example app listening at http://localhost:${port}`);
});

// console.log('Puerto funcionando en', 8000);