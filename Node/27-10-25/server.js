const http = require("http");
const url = require("url");

function newServer(req, res) {
  const parsedUrl = url.parse(__dirname, req.url);
  const pathName = parsedUrl.pathname;

  console.group("Request information");
  console.info("URL: ", parsedUrl);
  console.info("Pathname: ", pathName);
  console.groupEnd();
}

const server = http.createServer(newServer);

const PORT = 3000;
server.listen(PORT, () => {
  console.info(`Server running at http://localhost/${PORT}`);
});
