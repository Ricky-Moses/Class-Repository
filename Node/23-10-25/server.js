// Creating a server
const http = require("http"); // http - Core module of Node JS

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  //   res.setHeader("content-type", "text/html");
  //   res.statusCode = 200;

  res.writeHead(200, {
    "content-type": "text/html",
  });
  if (url === "/") {
    res.write(`
            <form action="/msg" method="GET">
                <input type="text" name="msg" placeholder="Enter a task">
                <input type="submit" value="Submit">
            </form>
        `);
    res.end();
  } else if (url === "/msg" && method === "GET") {
    res.write("<h1>This is message page</h1>");
    res.end();
  } else {
    res.write("<h1>Not Found</h1>");
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
