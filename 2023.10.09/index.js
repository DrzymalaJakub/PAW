const http = require("http");
const fs = require('fs'); 
const stream = require('stream');
//import { Readable } from 'stream
const port = 3300;
const minmaxArray = new Array(-420, 2137);

const server = http.createServer(function(req, res){
    
    async function * generate(){
        for(let i = 0; i < 20; i++){
            yield Math.floor(Math.random() * (minmaxArray[1] - minmaxArray[0]) ) + minmaxArray[0];
        }
        
    }
    //const wText =  ;
    
    const genNum = stream.Readable.from(generate());
    const writeStream = fs.createWriteStream(`message-${Date.now().toString()}.txt`, {encoding: 'utf8'});
    //let message = "";
    genNum.on('data', (chunk) => {
        console.log(chunk);
        writeStream.write(chunk.toString());
    });
    
    //fs.writeFile(`message-${Date.now().toString()}.txt`, message)
    
    writeStream.end();
    
    res.writeHead(200/*OK*/, {'Content-Type': 'text/html'});
    res.write(":)");
    res.end(); 
});

server.listen(port);