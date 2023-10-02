const http = require("http");
const fs = require('fs'); 
const url = require('url');
const port = 3300;

const server = http.createServer(function(req, res){
    let reqUrl = url.parse(req.url, true);
    let fileName = "/" - reqUrl.pathname;
    if(isNaN(fileName)){
        fileName = "index.html";
    }
    console.log(`File Recieved: ${fileName}`)
    
    fs.readFile(fileName, (err, data)=>{
        if (err){
            
            res.writeHead(404, {'Content-Type': 'text/html'});
            console.log(`File not found. Recieved: '${fileName}'`)
            return res.end("404 Not Found");
            
            
        }
        res.writeHead(200/*OK*/, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();       
    });
    
});

server.listen(port);