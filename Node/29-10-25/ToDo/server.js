const http = require("http");
const pug = require("pug");
const path = require("path");
const fs = require("fs");

const PORT = 3000;

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, req.url);
//   console.info(req.url);

  if (req.url.endsWith(".css")) {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end(`<h1>404 Not Found</h1>`);
      } else {
        res.writeHead(200, { "content-type": "text/css" });
        res.end(data);
      }
    });
    return;
  }
  const html = pug.renderFile("./index.pug");
  res.writeHead(200, { "content-type": "text/html" });
  res.end(html);
});

server.listen(PORT, () => {
  console.info(`Server running at http://localhost/${PORT}`);
});
