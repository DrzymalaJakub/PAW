const Json1 = {
    TeegardenA: "M-class red dwarf",
    TeegardenAb: "Earth size terrestial",
    TeegardenAc: "Earth size terrestial",
};
const NotFound404 = {
    Page: "Not Found 404",
}

const http = require("http");
const fs = require('fs'); 
const url = require('url');
const port = 3300;

const server = http.createServer(function(req, res){
    let reqUrl = url.parse(req.url, true);
    let fileName = (reqUrl.pathname).replace("/", "");
    console.log(`URL: ${reqUrl.pathname}`)
    if(fileName == ""){
        fileName = "index.html";
    }
    if(fileName == "api.html"){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(Json1));
        return;
    }
    
    fs.readFile(fileName, (err, data)=>{
        if (err){
            res.writeHead(404, {'Content-Type': 'application/json'});
            console.log(`File not found. Recieved: '${fileName}'`)
            return res.end(JSON.stringify(NotFound404));
        }
        res.writeHead(200/*OK*/, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();       
    });
    
});

server.listen(port);