const http = require('http');
const fs = require('fs');
const PORT = 2211

const server = http.createServer((err, data)=>{
    fs.readFile('index.html','utf8', function(err, data){
        if(err){
            console.log(err);
            return
        } else{
            console.log(data);
        }
    })
});

server.listen(PORT, ()=>{
    console.log(`Servidor ON ${PORT} 🤖`);
});