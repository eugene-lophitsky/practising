const {createServer} = require('node:http');
const establishConnection = require('./db.js');

const port = 3030;
const hostname = '127.0.0.1';


establishConnection();
const server = createServer((request, response)=>{
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain; charset=utf8');
    response.end('Соединение установлено');
})
server.listen(port, hostname, ()=>{
    console.log(`Сервер запущен на порту ${port}`)
})

