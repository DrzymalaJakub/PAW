const http = require("http");
const port = 3300;

const server = http.createServer(function(req, res){
    res.writeHead(200/*OK*/, {'Content-Type': 'text/html'});
    res.write("Hello World!");
    console.log("Hello World!")
    res.end();
});

server.listen(port);