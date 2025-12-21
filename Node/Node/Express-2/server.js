import express from "express";
import dotenv from "dotenv";
import connectDB from "./Config/db.js";

dotenv.config();
const app = express();
const PORT = 8000;

connectDB();

app.listen(PORT, () => {
  console.info(`Server running at http://localhost:${PORT}`);
});
