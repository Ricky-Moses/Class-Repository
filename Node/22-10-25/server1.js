// Creating a server
const http = require("http"); // http - Core module of Node JS

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if(url === "/"){
    res.setHeader("content-type", "application/json")

    res.write("<h1> This response </h1>")
    res.end()
  }

  // res.end("<h1> Server End </h1>")
  console.group("Rq Information");
  console.info("url: ", url);
  console.info("Methods: ", method);
  console.groupEnd();
});

server.listen(3000, () => {
  console.info(`Server running at http://localhost:3000`);
});

// console.info(http)
