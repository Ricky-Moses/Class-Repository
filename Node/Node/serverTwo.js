const HTTP = require("http");

// console.info(HTTP)

const server = HTTP.createServer((req, res) => {
  // console.info(req)

  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1> Heading </h1>");
    res.end()
  }

  console.group("Request information");
  console.info("Method: ", req.method);
  console.info("URL: ", req.url);
  console.groupEnd();
});

server.listen(3000, () => {
  console.info(`Server running at http://localhost:3000`);
});
