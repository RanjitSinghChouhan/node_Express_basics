const http = require('http')
const fs = require('fs')

const server = http.createServer()

server.on("request", (req, res) => {
    ////// 1st way---> In this way we get the complete file loaded at a time. Which is not a way a streaming
    // fs.readFile("input.txt", 'utf-8', (err, data) => {
    //     if(err) console.log(err);
    //     res.end(data.toString())
    // })


    //// 2nd way --> in this way we allow the server to load data in chunks.
    // const rStream = fs.createReadStream("input.txt");
    // rStream.on("data", (chunkData) => {
    //     res.write(chunkData)
    // })
    // rStream.on("end", () => {
    //     res.end()
    // })
    // rStream.on("error", (err) => {
    //     console.log(err);
    //     res.end("File not found")
    // })

    ///// 3rd way --> we can reduce 2nd way code to one line using pipe method
    const rStream = fs.createReadStream("input.txt");
    rStream.pipe(res)
})

server.listen(8000, '127.0.0.1')