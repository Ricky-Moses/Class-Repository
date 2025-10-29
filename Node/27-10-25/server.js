const http = require("http");
const URL = require("url");

const data = [];

const server = http.createServer((req, res) => {
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
          <title>ToDo List</title>
          <style>
            li{
              display: flex;
              align-items: center;
              gap: 20px;
            }
          </style>
        </head>
        <body>
          <main>
            <form action="/new-task">
              <input type="text" name="newTask" placeholder="Enter a new task" id="">
              <input type="submit" value="Submit">
            </form>
            <ul>
                ${
                  data.length > 0
                    ? `
                    ${data
                      .map(
                        (task, idx) => `
                        <li>
                          <div>${idx + 1}</div>
                          <div>${task}</div>
                          <div>
                            <form action="/update-task">
                              <input type="hidden" name="index" value="${idx}">
                              <input type="text" name="updateTask" placeholder="Update task">
                              <input type="submit" value="Update">
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
                      .join("")}
                  `
                    : `<li>No Task Added</li>`
                }
            </ul>
          </main>
        </body>
        </html>
      `);
    res.end();
  } else if (pathName === "/new-task") {
    const inputVal = query.newTask;

    if (inputVal && inputVal.trim() !== "") {
      data.push(inputVal);
    }
    res.writeHead(302, { location: "/" });
    res.end();
  } else if (pathName === "/update-task") {
    const index = query.index;
    const updatedTask = query.updateTask;

    if (data[index] && index !== undefined) {
      data[index] = updatedTask;
    }

    res.writeHead(302, { location: "/" });
    res.end();
  } else if (pathName === "/delete-task") {
    const index = query.index;

    if (index && index !== undefined) {
      data.splice(index, 1);
    }

    res.writeHead(302, { location: "/" });
    res.end();
  }

  console.group("Information");
  console.info("Parsed URL: ", parsedUrl);
  console.info("Pathname: ", pathName);
  console.info("Query: ", query);
  console.groupEnd();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.info(`Server running at http://localhost:${PORT}`);
});
