import jwt from "jsonwebtoken";
import User from "../Models/User.js";

const Protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")

    // Bearer <token>
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).send({ msg: "Unauthorized" });
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
