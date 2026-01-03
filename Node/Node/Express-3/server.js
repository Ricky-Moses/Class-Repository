import express from "express";
import dotenv from "dotenv";
import ConnectDB from "./Config/db.js";
import Register from "./Controllers/Register.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8800;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send(`<h1>This is a response give by Server</h1>`);
});

app.post("/register", Register);

ConnectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.info(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch(() => {
    console.error(`Server failed to run!`);
  });
