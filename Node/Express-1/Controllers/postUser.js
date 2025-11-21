import store from "../Config/db.js";

const postUser = async (req, res) => {
  store.push(req.body);
  res.send({ msg: "Data successfully added", store });
};

export default postUser;
