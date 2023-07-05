const http = require('http')
const PORT = 3333

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type': "text/html"})
    res.write('<meta charset="UTF-8">')
    res.write('<h1>Olá mundo</h1>')
    res.end()
})

server.listen(PORT, ()=>{
    console.log(`Servidor ON ${PORT} 🤖`)
})