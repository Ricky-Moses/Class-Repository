import express from "express";
import dotenv from "dotenv";
import connectDB from "./Config/db.js";
import route from "./Router/Router.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", route);

connectDB();
app.listen(PORT, () => {
  console.info(`Server running at http://localhost:${PORT}`);
});
