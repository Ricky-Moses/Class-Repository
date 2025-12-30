import User from "../Model/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(404).send({ msg: "All fields are required!" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send({ msg: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).send({ msg: "Invalid credentials" });
    }

    const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3 * 24 * 60 * 60 * 1000,
    });

    res.status(200).send({
      msg: "User logged successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    if (process.env.NODE_ENV === "development") {
      console.error(err);
    }
    res.status(500).send({ msg: "Internal server error" });
  }
};

export default Login;
