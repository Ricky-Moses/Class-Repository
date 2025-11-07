const HTTP = require("http");
const PUG = require("pug");
const PATH = require("path");
const FS = require("fs");

const PORT = 3000;

function ReqResFunction(req, res) {
  const filePath = PATH.join(__dirname, req.url);

  if (req.url.endsWith(".css") && req.method === "GET") {
    FS.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end("404 Not Found");
      } else {
        res.writeHead(200, { "content-type": "text/css" });
        res.end(data);
      }
    });
    return;
  }

  const html = PUG.renderFile("./index.pug");
  res.writeHead(200, { "content-type": "text/html" });
  res.end(html);
}

const SERVER = HTTP.createServer(ReqResFunction);

SERVER.listen(PORT, () => {
  console.info(`Server running at http:localhost/${PORT}`);
});
