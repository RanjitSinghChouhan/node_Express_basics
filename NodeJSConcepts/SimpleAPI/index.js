const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
   const apiData = fs.readFileSync(`${__dirname}/user.json`, 'utf-8')
    if(req.url === '/userApi') {
        // fs.readFile(`${__dirname}/user.json`, 'utf-8', (err, data) => {
        //     res.end(data)
        // })
        res.end(apiData)
    } else {
        res.writeHead(404, {"content-type": "text/html"});
        res.end("<h1>Error 404, Page not found</h1>")
    }
})

server.listen(8000, '127.0.0.1', () => {
    console.log("listening to port 8000 ")
})