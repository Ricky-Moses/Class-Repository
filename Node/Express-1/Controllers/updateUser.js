import store from "../Config/db.js";

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const indexValue = store.findIndex((u) => u.id === id);

  store[indexValue].name = name;

  res.send({ msg: "User updated", store });
};

export default updateUser;
