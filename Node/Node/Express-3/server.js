import express from "express";
import dotenv from "dotenv";
import ConnectDB from "./Config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8800;

app.get("/", (req, res) => {
  res.status(200).send(`<h1>This is a response give by Server</h1>`);
});

ConnectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.info(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch(() => {
    console.error(`Server failed to run!`);
  });
