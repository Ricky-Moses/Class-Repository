import User from "../Model/User.js";
import jwt from "jsonwebtoken";

const Protect = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(404).send({ msg: "Token not found" });
    }

    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select("-password");

    req.user = user;

    next();
    // console.info(token);
  } catch (err) {
    if (process.env.NODE_ENV === "development") {
      console.error(err);
    }
    res.status(500).send({ msg: "Internal server error" });
  }
};

export default Protect;
