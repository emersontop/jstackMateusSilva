const http = require("http");

const server = http.createServer((request, response)=>{
    console.log(`Request Method: ${request.method}|Endpoint:${request.url}`);

    if(request.url ==='/users'&&)

    response.writeHead(200,{'contente-type':'text/html'});
    response.end('<h1>Hello, world!</h1>');
});

server.listen(3000,()=>console.log("Server satrted at http://localhost:3000"));