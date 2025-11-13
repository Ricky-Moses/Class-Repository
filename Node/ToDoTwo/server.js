const HTTP = require("http");
const PUG = require("pug");
const FS = require("fs");
const PATH = require("path");

const data = []; // Mock database

const PORT = 5000;
const reqResFunction = (req, res) => {
  const url = req.url;
  const method = req.method;
  const filePath = PATH.join(__dirname, url);

  if (url.endsWith(".css") && method === "GET") {
    FS.readFile(filePath, (err, data) => {
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
  if (url.startsWith("/new-task") && method === "POST") {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      const query = new URLSearchParams(body);
      const newTask = query.get("newTask");

      if (newTask && newTask.trim() !== "") {
        data.push({ id: data.length + 1, task: newTask });
        console.info(data);
      }

      res.writeHead(302, { location: "/" });
      res.end();
    });

    return;
  }
  if (url.startsWith("/update-task") && method === "POST") {
    const searchParams = new URL(url, `http://${req.headers.host}`)
      .searchParams;
    const id = Number(searchParams.get("id"));
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      const query = new URLSearchParams(body);
      const updatedValue = query.get("updateTask");

      const taskFounded = data.find((task) => task.id === id);

      if (taskFounded && updatedValue) {
        taskFounded.task = updatedValue;
      }
      res.writeHead(302, { location: "/" });
      res.end();
    });

    return;
  }

  const html = PUG.renderFile("./index.pug", { data });
  res.writeHead(200, { "content-type": "text/html" });
  res.end(html);
};

const SERVER = HTTP.createServer(reqResFunction);

SERVER.listen(PORT, () => {
  console.info(`Server running at http://localhost:${PORT}`);
});
