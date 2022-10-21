const http = require('http');

// REQUIRE - todo lo que el usuario solicita
// RESPONSE - todo lo que el usuario recibe

http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type':'application/json'});
    const persona ={
        id: 1,
        nombre: 'Danny'
    }

    res.write(JSON.stringify(persona));
    res.end();
})
.listen(8000);

console.log('Puerto funcionando en', 8000);