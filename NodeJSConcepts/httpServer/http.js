const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url)
    if(req.url === '/') res.end("Hello from other side");
    else if(req.url === '/about') res.end("Hello from about us page");
    else res.writeHead('404', {"content-type": "text/html"}); res.end("<h1>Error 404, Page not found</h1>")
})
server.listen(8000, "127.0.0.1", () => {
    console.log("listening to port 8000")
})