import express from "express";
import dotenv from "dotenv";
import cors from 'cors'
import ConnectDB from "./Config/db.js";
import router from "./Routes/route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8800;

app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Server running..." });
});

app.use("/api", router)

ConnectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.info(`Server running at PORT: ${PORT}`);
    });
  })
  .catch(() => {
    console.error(`Server failed run...`);
  });
