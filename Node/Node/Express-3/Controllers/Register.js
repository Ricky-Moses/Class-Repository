import User from "../Model/User.js";
import bcrypt from "bcrypt";

const Register = async (req, res) => {
  //   console.info(req.body);
  const { name, email, password } = req.body;
  try {
    // Check if all field are exist
    if (!name || !email || !password) {
      return res.status(406).send({ msg: "All fields required" });
    }

    const existUser = await User.findOne({ email });

    if (existUser) {
      return res.status(409).send({ msg: "User already exist!" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    // console.info(hashPassword);

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
    if (process.env.NODE_ENV === "development") {
      console.error(err);
    }
    res.status(500).send({ msg: "Internal server error" });
  }
};

export default Register;
