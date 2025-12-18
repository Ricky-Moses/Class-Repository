import express from "express";

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send(`<h1>This is HTML Type</h1>`);
});

app.get("/json", (req, res) => {
  res.send({ msg: "This is JSON Type" });
});

app.get("/plain", (req, res) => {
  res.type("text").send(`<h1>This is Plain type</h1>`);
});

app.listen(PORT, () => {
  console.info(`Server running at http://localhost:${PORT}`);
});
