import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./Config/db.js";
import register from "./Controllers/Register.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.post("/register", register);

connectDB();
app.listen(PORT, () => {
  console.info(`Server running at http://localhost:${PORT}`);
});
