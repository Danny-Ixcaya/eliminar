const express = require('express');
const app = express();
const port = 8000;

app.use(express.static('public2'))

app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public2/generic.html');
});

app.get('/elements', function(req, res) {
    res.sendFile(__dirname + '/public2/elements.html');
});

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, ()=> {
    console.log(`Example app listening at http://localhost:${port}`);
});

// console.log('Puerto funcionando en', 8000);