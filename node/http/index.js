const  http = require('http')

const server = http.createServer((req, res)=>{
    res.writeHead(200,{'Content-Type': 'text/html'})
    res.write('<h1>Hola Mundo desde HTTP-NODE</h1>')
    res.end()
})

server.listen(3000, () => {
    console.log('la aplicacion se esta ejecutando en http://localhost:3000')
})