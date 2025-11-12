const HTTP = require("http");
const URL = require("url");

const PORT = 3000;

const data = [];

function reqResFunc(req, res) {
  const parsedUrl = URL.parse(req.url, true);
  const pathName = parsedUrl.pathname;
  const query = parsedUrl.query;

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
                    li{
                        display: flex;
                        align-items: center;
                        gap: 40px;
                    }
                </style>
            </head>
            <body>
                <main>
                    <form action="/new-task">
                        <input type="text" placeholder="Enter a task" name="task">
                        <input type="submit" value="Submit">
                    </form>
                    <ul>
                        ${
                          data.length > 0 &&
                          data
                            .map(
                              (list, idx) => `
                                <li>
                                    <div>${idx + 1}</div>
                                    <div>${list}</div>
                                    <div>
                                      <form action="/update-task">
                                        <input type="hidden" name="index" value=${idx}>
                                        <input type="text" name="updateTask" placeholder="Update task">
                                        <input type="submit" value="Submit">
                                      </form>
                                    </div>
                                    <div>
                                      <a href="/delete-task?index=${idx}">
                                        <button>Delete</button>
                                      </a>
                                    </div>
                                </li>
                            `
                            )
                            .join("")
                        }
                    </ul>
                </main>
            </body>
            </html>
        `);
    res.end();
  }
  // Create
  else if (pathName === "/new-task") {
    const task = query.task;

    if (task) {
      data.push(task);
    }
    res.writeHead(302, { location: "/" });
    res.end();
    // console.info(task);
  }
  // Update task
  else if (pathName === "/update-task") {
    const index = query.index;
    const updatedTask = query.updateTask;

    if (index && updatedTask) {
      data[index] = updatedTask;
    }

    res.writeHead(302, { location: "/" });
    res.end();

    console.group("Update Information");
    console.info("Index: ", index);
    console.info("update task: ", updatedTask);
    console.groupEnd();
  } else if (pathName === "/delete-task") {
    const index = query.index;

    if (index) {
      data.splice(index, 1);
    }

    res.writeHead(302, { location: "/" });
    res.end();
  }

  // console.group("Request Information");
  // console.info("URL: ", parsedUrl);
  // console.info("Pathname: ", pathName);
  // console.info("Query: ", query);
  // console.groupEnd();
}

const server = HTTP.createServer(reqResFunc);

server.listen(PORT, () => {
  console.info(`Server running at http://localhost:${PORT}`);
});
