const http = require("http");
const port = 3300;

const server = http.createServer(function(req, res){
    res.write("Hello World!");
    res.end();
});

server.listen(port);