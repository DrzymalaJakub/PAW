
const Json1 = {
    TeegardenA: "M-class red dwarf",
    TeegardenAb: "Earth size terrestial",
    TeegardenAc: "Earth size terrestial",
};
const Json = JSON.stringify(Json1);
const http = require("http");
const port = 3300;

const server = http.createServer(function(req, res){
    res.writeHead(200/*OK*/, {'Content-Type': 'application/json'});
    res.write(Json);
    res.end();
});

server.listen(port);
