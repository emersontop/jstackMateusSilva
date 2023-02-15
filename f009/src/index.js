const http = require("http");
const { url } = require("inspector");

const routes = require('./routes');

const server = http.createServer((request, response)=>{
    console.log(`Request Method: ${request.method}|Endpoint:${request.url}`);

    const route = routes.find((routeObj)=>(
        routeObj.endpoit === request.url && routeObj.method === request.method
    ));

    if(route){
        route.handler(request, response)
    }else{
        response.writeHead(200,{'contente-type':'text/html'});
        response.end(`Cannot ${request.method} ${request.url}`);
    }
});

server.listen(3000,()=>console.log("Server satrted at http://localhost:3000"));