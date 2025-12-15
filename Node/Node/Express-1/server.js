import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send({ msg: "This response given by express js" });
});



app.listen(3000, () => {
  console.info(`Server running at http://localhost:3000`);
});
