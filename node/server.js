const { log } = require('console')
const fs = require('fs')
const http = require('http')

const server = http.createServer((req, res) => {
    console.log("created")
    if (req.url !== "/") {
        res.end()
    }
  //     const file=fs.readFileSync('file.txt')
    //     return res.end(file)
    
    const readableStream = fs.createReadStream('file.txt');
    // readableStream.on('data', (chuck) => {
    //     res.write(chuck)
    // });
    // readableStream.on('end', () => {
    //     res.end()
    // })
    // readableStream.on('error', (err) => {
    //     console.log(err);
    //     res.statusCode = 500
    //     res.end('Internal server Error')

    // })
    readableStream.pipe(res)
 })

server.listen(3000, () => {
    console.log("Listning......")
})