import { getUserData, updateData } from "../Config/db.js";

const deleteUser = async (req, res) => {
  const { id } = req.params;

  const storedData = getUserData();

  const filteredData = storedData.filter((f) => f.id !== id);

  updateData(filteredData);

  res.send({ msg: "Data successfully deleted", storedData });
};

export default deleteUser;
