// Create server (http)
const HTTP = require("http")

// console.info(HTTP)

const server = HTTP.createServer((req, res) => {
    // Request is from client side
    // Response from server side

    if(req.url === "/" && req.method === "GET"){
        res.writeHead(200, {"content-type" : "application/json"})
        res.write(`<h1>This is NODE JS</h1>`)
        res.end()
    }

    console.group('Request information')
    console.info("url: ", req.url)
    console.info("method: ", req.method)
    console.groupEnd();
})

server.listen(3000, () => {
    console.info(`Server running at http://localhost/3000`)
})