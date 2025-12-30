// HTTP
const HTTP = require("http");

// console.info(HTTP)

const Server = HTTP.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>This is a home response!</h1>");
    res.end();
  }

  if(url === "/not-found"){
    res.writeHead(404, {"content-type" : "text/html"})
    res.write(`<h1>Not Found</h1>`)
    res.end()
  }

  console.group("Request information");
  console.info(req.method);
  console.info(url);
  console.groupEnd();
});

Server.listen(3000, () => {
  console.info(`Server running at http://localhost:3000`);
});
