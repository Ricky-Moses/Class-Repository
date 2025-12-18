import express from "express";

const app = express();
const PORT = 8000;


app.listen(PORT, () => {
  console.info(`Server running at http://localhost:${PORT}`);
});
