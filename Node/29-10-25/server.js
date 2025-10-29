// http - hyper text transfer protocol
const http = require("http");

// console.info(http);
function rqListener(req, res){

    // response.writeHead(200, {"content-type":"text/html"})
    // response.write(`<h1>This is response</h1>`)
    // response.end()

    console.group("Information")
    console.info("URL: ", req.url)
    console.info("Method: ", req.method)
    console.groupEnd();
}

const server = http.createServer(rqListener)

server.listen(3000, () => {
    console.info(`Server running at http://localhost/3000`)
})