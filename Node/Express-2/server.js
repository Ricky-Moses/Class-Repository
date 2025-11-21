import bodyParser from "body-parser";
import express from "express";
import getData from "./Controllers/getFile.js";
import postData from "./Controllers/postFile.js";
import updateData from "./Controllers/updateFile.js";
import deleteData from "./Controllers/deleteFile.js";

const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/all-user", getData);
app.post("/add-user", postData);
app.put("/update-user/:id", updateData);
app.delete("/delete-user/:id", deleteData);

app.listen(PORT, () => {
  console.info(`Server running at http://localhost:${PORT}`);
});
