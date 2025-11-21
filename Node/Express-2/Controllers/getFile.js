import data from "../Config/db.js";

const getData = async (req, res) => {
  res.json({ msg: "Data received successfully", data });
};
export default getData;
