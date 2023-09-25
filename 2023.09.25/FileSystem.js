const http = require("http");
const fs = require('fs'); 
const port = 3300;

var fileName = "gliese667Cc.html"

const server = http.createServer(function(req, res){
    fs.readFile(fileName, (err, data)=>{
        res.writeHead(200/*OK*/, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();       
    });
    
});

server.listen(port);