import store from "../Config/db.js";

const getUser = async (req, res) => {
  if (store.length <= 0) {
    res.status(404).json({ msg: "Not data exist" });
    return;
  }
  res.send({ msg: "Data successfully received", store });
};

export default getUser;
