import data from "../Config/db.js";

const postData = async (req, res) => {
  const { id, name, email } = req.body;

  data.push({ id, name, email });

  res.json({ msg: "Data successfully added", data });
};

export default postData;
