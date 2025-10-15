const http = require("http");

const server = http.createServer((request, response) => {
  console.info(request);
});

server.listen(3000, () => {
  console.info("Server running at http://localhost:3000");
});
