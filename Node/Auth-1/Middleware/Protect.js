import User from "../Models/User.js";
import jwt from "jsonwebtoken";

const Protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    // Bearer <token>
  }

  if (!token) {
    return res.status(401).send({ msg: "Not authorized" });
  }

  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id).select("-password");

    next();
  } catch (err) {
    console.error(err);
    res.status(500).send({ msg: "Internal server error" });
  }
};

export default Protect;
