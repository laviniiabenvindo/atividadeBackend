const http = require('http');
const PORT = 3333

const server = http.createServer((req, res)=>{
    if(req.url==="/"){
        res.writeHead(200, {'Content-type': "text/html"})
        res.write('<meta charset="UTF-8">')
        res.write('<h1>Bem-vindo a página inicial</h1>')
        res.end()
    }else if(req.url === "/sobre"){
        res.writeHead(200, {'Content-type': "text/html"})
        res.write('<meta charset="UTF-8">')
        res.write('<h1>Sobre nós: Somo uma empresa dedicada a ...</h1>')
        res.end()
    }else{
        res.writeHead(404, {'Content-type': "text/html"})
        res.write('<meta charset="UTF-8">')
        res.write('<h1>Use as "/" para navegar</h1>')
        res.end()
    }
});

server.listen(PORT, ()=>{
    console.log(`Servidor ON ${PORT} 🤖`);
});