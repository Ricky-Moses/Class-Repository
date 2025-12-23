import User from "../Model/User.js";
import bcrypt from "bcrypt";

const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // All fields required condition
    if (!name || !email || !password) {
      res.status(406).send({ msg: "All fields are required!" });
      return;
    }

    // Check if user already exist
    const existUser = await User.findOne({ email });

    if (existUser) {
      res.status(409).send({ msg: "User already exists!" });
      return;
    }

    // Convert password into hash password
    const hashPassword = await bcrypt.hash(password, 10);

    // New user
    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
    });

    res.status(201).send({
      msg: "New user registered",
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ msg: "Internal server error" });
  }
};

export default register;
