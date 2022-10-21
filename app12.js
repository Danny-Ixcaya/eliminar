const express = require('express');
const app = express();
const port = 8000;

app.set('view engine', 'hbs');

app.use(express.static('public3'))

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public3/generic.html');
});

app.get('/elements', function(req, res) {
    res.sendFile(__dirname + '/public3/elements.html');
});

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, ()=> {
    console.log(`Example app listening at http://localhost:${port}`);
});

// console.log('Puerto funcionando en', 8000);