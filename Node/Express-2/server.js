import bodyParser from "body-parser";
import express from "express";

const app = express();
const PORT = 8000;

let data = []; // Mock database

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/all-user", (req, res) => {
  res.json({ msg: "Data received successfully", data });
});

app.post("/add-user", (req, res) => {
  const { id, name, email } = req.body;

  data.push({ id, name, email });

  res.json({ msg: "Data successfully added", data });
});

app.put("/update-user/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  // console.info(id)
  const index = data.findIndex((u) => u.id === id);

  if (!index && !data[index]) {
    res.status(404).json({ msg: "Data is not found" });
    return;
  }

  data[index].name = name;
  res.json({ msg: "Data updated successfully", data });
});

app.delete("/delete-user/:id", (req, res) => {
  const { id } = req.params;

  data = data.filter((u) => u.id !== id);
  res.json({ msg: "Data deleted successfully", data });
});
app.listen(PORT, () => {
  console.info(`Server running at http://localhost:${PORT}`);
});
