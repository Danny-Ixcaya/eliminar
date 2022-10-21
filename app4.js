const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Hola mundo con expres');
})

app.listen(8000);

console.log('Puerto funcionando en', 8000);