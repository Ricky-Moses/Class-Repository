import express from "express";
import bodyParser from "body-parser";

const app = express(); // Instant server create
const PORT = 8000;

let store = []; // Mock database

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// GET - Data get from server side by client request
app.get("/get-user", (req, res) => {
  if (store.length <= 0) {
    res.status(404).json({ msg: "Not data exist" });
    return;
  }
  res.send({ msg: "Data successfully received", store });
});

// POST - Data pass from client side to server side
app.post("/add-user", (req, res) => {
  // Id, name, email
  // const { id, name, email } = req.body;

  store = req.body;

  res.send({ msg: "Data successfully added", store });
});

// PUT - Update a data in server side
app.put("/update-user/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const indexValue = store.findIndex((u) => u.id === id);

  store[indexValue].name = name;

  res.send({ msg: "User updated", store });
});

// DELETE - Delete a data in server side
app.delete("/delete-user/:id", (req, res) => {
  const { id } = req.params;

  store = store.filter((f) => f.id !== id);

  res.send({ msg: "Data successfully deleted", store });
});

app.listen(PORT, () => {
  console.info(`Server running at http://localhost:${PORT}`);
});
