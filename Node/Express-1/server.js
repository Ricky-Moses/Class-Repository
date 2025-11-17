import express from "express";
import bodyParser from "body-parser";

const app = express(); // Instant server create
const PORT = 8000;

const store = []; // Mock database

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// GET - Data get from server side by client request
app.get("/get-user", (req, res) => {
  res.send({ msg: "Data successfully received", store });
});

// POST - Data pass from client side to server side
app.post("/add-user", (req, res) => {
  // Id, name, email
  const { id, name, email } = req.body;

  store.push({ id, name, email });

  res.send({ msg: "Data successfully added", store });
});

app.listen(PORT, () => {
  console.info(`Server running at http://localhost:${PORT}`);
});
