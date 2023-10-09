const http = require("http");
const fs = require('fs'); 
const stream = require('stream');
const util = require("util")
const port = 3300;
const minmaxArray = new Array(-420, 2137);
const finished = util.promisify(stream.finished)

async function * generate(){
    for(let i = 0; i < 20; i++){
        yield Math.floor(Math.random() * (minmaxArray[1] - minmaxArray[0]) ) + minmaxArray[0];
    }

}
async function writeIterableToFile(iterable, filePath) {
    const writable = fs.createWriteStream(filePath, {encoding: 'utf8'})
    for await (const chunk of iterable) {
        if (!writable.write(chunk)) { // (B)
            // Handle backpressure
            await once(writable, 'drain')
        }
    }
    writable.end() // (C)
    // Wait until done. Throws if there are errors.
    await finished(writable)
}

const server = http.createServer(async function(req, res){
    
    //const wText =  ;
    
    const genNum = stream.Readable.from(generate());
    //const writeStream = fs.createWriteStream(`message-${Date.now().toString()}.txt`, {encoding: 'utf8'});
    let message = new Array();
    genNum.on('data', (chunk) => {
        //console.log(chunk.toString());
        message.push(chunk.toString() + "\n");
    });
    
    genNum.on('end', async()=>{
        await writeIterableToFile(message, `messages/message-${Date.now().toString()}.txt`);
        res.writeHead(200/*OK*/, {'Content-Type': 'text/html'});
        res.write(":)");
        res.end(); 
    });
    
});

server.listen(port);