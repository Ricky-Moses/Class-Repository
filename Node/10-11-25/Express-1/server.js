/*
    Packages Installation: npm init -y
        1. nodemon(watch the changes) - Development Dependency
        Installation: npm i -D nodemon or npm i nodemon --save-dev
        2. express(Node Framework) - Production Dependency
        Installation: npm i express
*/

import express from "express";

const app = express(); // Call the function to create instant server
// Automatically use the 'HTTP' module
const PORT = 3000;

// Middleware
app.use((req, res, next) => {
  console.group("Request Information");
  console.info("URL: ", req.url);
  console.info("Method: ", req.method);
  console.groupEnd();
  next();
});

// Response
app.use((req, res, next) => {
  // res.send(`<h1>This is Response</h1>`);
  // res.type("text").send(`<h1>This is Response</h1>`);
  //   res.json({ msg: "This is JSON formate" });
//   res.send({ msg: "This is JSON Formate Also" });
});

app.listen(PORT, () => {
  console.info(`Server running at http://localhost:${PORT}`);
});
