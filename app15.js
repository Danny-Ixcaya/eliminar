const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

//utlizar handlebars para renderizar las paginas
app.set('view engine', 'hbs');

//uso de partials para que contenido aprezaca en varios archivos
hbs.registerPartials(__dirname + '/views/partials');

//servir contenido estatico public3 donde esta template
app.use(express.static('public3'))

app.get('/', (req, res) => {
    res.render('home3', {
        nombre: 'Danny Ixcaya',
        titulo: 'Curso NodeJS'

    });

})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Danny Ixcaya',
        titulo: 'Curso NodeJS'

    });

})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Danny Ixcaya',
        titulo: 'Curso NodeJS'

    });

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