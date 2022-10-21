const http = require('http');

// REQUIRE - todo lo que el usuario solicita
// RESPONSE - todo lo que el usuario recibe

http.createServer((req, res) => {
    res.setHeader('Content-Disposition','attachment; filename=Dannylista.csv')
    res.writeHead(200, {'Content-Type':'application/csv'});

    res.write('id, nombre\n');
    res.write('1, Danny\n');
    res.write('2, Fill\n');
    res.write('3, Hamil\n');
    res.write('4, Joha\n');
    res.end();
    
    
})
.listen(8000);

console.log('Puerto funcionando en', 8000);