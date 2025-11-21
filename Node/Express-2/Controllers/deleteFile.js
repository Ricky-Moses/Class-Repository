import { setData, updatedData } from "../Config/db.js";

const deleteData = async (req, res) => {
  const { id } = req.params;

  const data = setData()

  const filteredData = data.filter((u) => u.id !== id);
  updatedData(filteredData);
  res.json({ msg: "Data deleted successfully", data });
};

export default deleteData;
