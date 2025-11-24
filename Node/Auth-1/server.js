import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8800;


// Middleware
app.get("/", (req, res) => {
  res.send({ msg: "This response from server!" });
});

app.listen(PORT, () => {
  console.info(`Server running at PORT: ${PORT} in development environment`);
});
