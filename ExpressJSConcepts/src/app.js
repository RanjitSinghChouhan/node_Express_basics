const express = require('express');
const path = require('path')
const app = new express();

//// this will provide the static route content
const staticPath = path.join(__dirname, "../public")
app.use(express.static(staticPath))

app.get('/', (req, res) => {
    res.send("<h1>Hello world ! welcome to Ranjit's Code</h1>")
})

app.get('/about', (req, res) => {
    res.send("<h1>Hello! welcome to Ranjit's About Page</h1>")
})

app.listen(8000, () => {
    console.log("listing to port 8000")
})