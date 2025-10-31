const http = require("http");
const pug = require("pug");
const path = require("path");
const fs = require("fs");

const PORT = 3000;
const data = [];

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, req.url);
  console.info(req.url);

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
  } else if (req.url === "/new-task" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      const params = new URLSearchParams(body);
      const value = params.get("newTask");
      if (value) data.push({ id: data.length + 1, value });
      res.writeHead(302, { location: "/" });
      console.info(data);
      // console.info(value);
      // console.info(params)
      res.end();
    });
    // console.info(body);

    return;
  }
  const html = pug.renderFile("./index.pug");
  res.writeHead(200, { "content-type": "text/html" });
  res.end(html);
});

server.listen(PORT, () => {
  console.info(`Server running at http://localhost/${PORT}`);
});
