// http - hyper text transfer protocol
const http = require("http");
const URL = require("url");

let data = [];
// console.info(http);
function rqListener(req, res) {
  const parsedURL = URL.parse(req.url, true);
  const pathName = parsedURL.pathname;
  const query = parsedURL.query;
  // response.writeHead(200, {"content-type":"text/html"})
  // response.write(`<h1>This is response</h1>`)
  // response.end()

  if (pathName === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Document</title>
              <style>
                  * {
                  margin: 0;
                  padding: 0;
                  box-sizing: border-box;
                  list-style-type: none;
                }

                body{
                  display: flex;
                  flex-direction: column;
                  gap: 30px;
                  padding: 20px;
                }
                  li{
                    display: flex;
                    align-items: center;
                    gap: 20px;
                  }
              </style>
            </head>
            <body>
              <form action="/new-task">
                <input type="text" placeholder="Enter a task" name="task">
                <input type="submit" value="Submit">
              </form>
              <ul>
                ${data
                  .map(
                    (list) => `
                    <li>
                      <div>${list.id}</div>
                      <div>${list.task}</div>
                      <div>
                        <form action="/update-task">
                          <input type="hidden" name="taskId" value="${list.id}">
                          <input type="text" name="updatedTask" placeholder="Update">
                          <input type="submit" value="Update">
                        </form>
                      </div>
                      <div>
                        <form action="/delete-task">
                          <input type="hidden" name="taskId" value="${list.id}">
                          <input type="submit" value="Delete">
                        </form>
                      </div>
                    </li>
                  `
                  )
                  .join("")}
              </ul>
            </body>
            </html>
            `);
    res.end();
  } else if (pathName === "/new-task") {
    const newTask = query.task;
    if (newTask) {
      data.push({ id: data.length + 1, task: newTask });
    }
    res.writeHead(302, { location: "/" });
    res.end();
  } else if (pathName === "/update-task") {
    const taskId = Number(query.taskId);
    const updateTask = query.updatedTask;

    const taskFounded = data.find((task) => task.id === taskId);

    if (taskFounded && updateTask) {
      taskFounded.task = updateTask;
    }

    res.writeHead(302, { location: "/" });
    res.end();

    console.group("Update task");
    console.info("ID: ", typeof taskId);
    console.info("Updated Task: ", updateTask);
    console.groupEnd();
  } else if (pathName === "/delete-task") {
    const taskId = Number(query.taskId);

    if (taskId) {
      data = data.filter((list) => list.id !== taskId);
    }

    res.writeHead(302, { location: "/" });
    res.end();
  } else {
    res.writeHead(404);
    res.write(`<h1>404 Not Found</h1>`);
    res.end();
  }

  console.group("Information");
  console.info("URL: ", parsedURL);
  console.info("Pathname: ", pathName);
  console.info("Query: ", query);
  console.info("Data: ", data);
  console.groupEnd();
}

const server = http.createServer(rqListener);

server.listen(3000, () => {
  console.info(`Server running at http://localhost/3000`);
});
