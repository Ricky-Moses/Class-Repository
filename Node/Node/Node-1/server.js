const HTTP = require("http");
const URL = require("url");

const PORT = 8800;
const server = HTTP.createServer((req, res) => {
  const parsedUrl = URL.parse(req.url, true);
  const pathName = parsedUrl.pathname;

  if (pathName === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`
        <form action="/new-task">
            <input type="text" name="" id="">
            <input type="submit" value="Submit">
        </form>
    `);
    res.end();
  }

  if (pathName === "/new-task") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`This new task area`);
    res.end();
  }

  console.group("Request information");
  console.info("Parse: ", parsedUrl);
  console.info("Pathname: ", pathName);
  console.groupEnd();
});

server.listen(PORT, () => {
  console.info(`Server running at http://localhost:${PORT}`);
});
