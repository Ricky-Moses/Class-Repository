import bodyParser from "body-parser";
import express from "express";

const app = express();
const PORT = 8000;

const data = []; // Mock database

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.send(`<h1>This is response by server</h1>`)
// })

app.post("/add-user", (req, res) => {
  const { id, name, email } = req.body;

  data.push({ id, name, email });

  res.json({ msg: "Data successfully added", data });
});

app.listen(PORT, () => {
  console.info(`Server running at http://localhost:${PORT}`);
});
