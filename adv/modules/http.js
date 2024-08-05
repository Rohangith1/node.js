
const http = require('http');
console.log(http)

const server = http.createServer((req, res) => {
    console.log("strated...");
    res.setHeader("Hello","response")
    res.setHeader("Content-Type","text/html")
    res.end("<h1>Hello i am response</h1>")
    if (req.url === "/") {
        res.end("HOME Page")
    }
    if (req.url === "/about") {
        res.end("ABOUT Page")
    }

})

server.listen(3000, () => {
    console.log("server running at port 3000")
})
