import data from "../Config/db.js";

const updateData = async (req, res) => {
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
};

export default updateData;
