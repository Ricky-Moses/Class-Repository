import express from "express";
import getUser from "./Controllers/getUser.js";
import postUser from "./Controllers/postUser.js";
import updateUser from "./Controllers/updateUser.js";
import deleteUser from "./Controllers/deleteUser.js";

const app = express(); // Instant server create
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// GET - Data get from server side by client request
app.get("/get-user", getUser);

// POST - Data pass from client side to server side
app.post("/add-user", postUser);

// PUT - Update a data in server side
app.put("/update-user/:id", updateUser);

// DELETE - Delete a data in server side
app.delete("/delete-user/:id", deleteUser);

app.listen(PORT, () => {
  console.info(`Server running at http://localhost:${PORT}`);
});
