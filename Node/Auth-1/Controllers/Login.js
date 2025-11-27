import User from "../Models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(404).send({ msg: "All fields required!" });
    }

    const user = await User.findOne({ email });
    console.info(user);
    if (!user) {
      return res.status(404).send({ msg: "Email not found!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ msg: "Invalid credential" });
    }

    const token = await jwt.sign(user._id, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).send({ msg: "Logged successfully", token });
  } catch (err) {
    console.error(err);
    res.status(500).send({ msg: "Internal Server Error" });
  }
};

export default Login;
