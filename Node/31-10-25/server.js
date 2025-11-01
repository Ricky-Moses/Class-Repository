// http - hyper text transfer protocol
const http = require("http");
const URL = require("url");

// console.info(http);
function rqListener(req, res) {
  const parsedURL = URL.parse(req.url, true);
  const pathName = parsedURL.pathname;
  // response.writeHead(200, {"content-type":"text/html"})
  // response.write(`<h1>This is response</h1>`)
  // response.end()

  if (pathName === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<form action="/msg">
                <input type="text" placeholder="Enter a task" id="">
                <input type="submit" value="Submit">
            </form>`);
    res.end();
  } else if (pathName === "/msg") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<h1>This response of message</h1>`);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write(`<h1>404 Not Found</h1>`);
    res.end();
  }

  console.group("Information");
  console.info("URL: ", parsedURL);
  console.info("Pathname: ", pathName);
  console.groupEnd();
}

const server = http.createServer(rqListener);

server.listen(3000, () => {
  console.info(`Server running at http://localhost/3000`);
});
