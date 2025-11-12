import express from "express";

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  res.send(`<h1>This is HTML File</h1>`);
});

app.get("/json", (req, res) => {
  res.json({ msg: "This is JSON Formate" });
});

app.get("/plain", (req, res) => {
  res.type("text").send("This is Text Formate");
});

app.listen(PORT, () => {
  console.info(`Server running at http://localhost:${PORT}`);
});
