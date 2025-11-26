import User from "../Models/User.js";
import bcrypt from "bcrypt";

const Register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // All fields required condition
    if (!name || !email || !password) {
      return res.status(404).send({ msg: "All fields are required" });
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).send({ msg: "User already exists!" });
    }

    // Convert password into hash password
    const hashPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
    });

    res.status(201).send({ msg: "New user Registered" });
  } catch (err) {
    console.error(err);
    res.send(500).send({ msg: "Internal Server Error" });
  }
};

export default Register;
