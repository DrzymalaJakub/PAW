const http = require("http");
const port = 3333;

const server = http.createServer(function(req, res){
    res.writeHead(200/*OK*/, {'Content-Type': 'text/html'});
    console.log("Hello World!")
    res.end();
});

server.listen(port);