import {createServer} from 'node:http';
import establishConnection from './db.js';

const port = 3030;
const hostname = '127.0.0.1';


establishConnection();
const server = createServer((request, response)=>{

    response.setHeader("Access-Control-Allow-Origin", "*"); // Разрешить запросы с любого источника
  

    if(request.url === "/" && request.method === "GET") {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain; charset=utf8');
        response.end('Загружена стартовая спраница');
    }
    if(request.url === "/message" && request.method === "POST") {
        let requestBody = "";
        request.on('data', (data)=>{
            requestBody += data;
            console.log(requestBody)
        })
        request.on('end', ()=>{
            console.log(requestBody);
        })
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain; charset=utf8');
        response.end();
    }
})
server.listen(port, hostname, ()=>{
    console.log(`Сервер запущен на порту ${port}`)
})

