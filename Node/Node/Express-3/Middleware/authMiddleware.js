import jwt from "jsonwebtoken";
import User from "../Model/User.js";

const Protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    // console.info(req.headers.authorization)
    token = req.headers.authorization.split(" ")[1];
    // console.info(token);
  }

  if (!token) {
    return res.status(401).send({ msg: "Token is unauthorized" });
  }

  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    //   console.info(decoded)
    const user = await User.findById(decoded.id).select("-password");
    //   console.info(user)

    req.user = user;

    next();
  } catch (err) {
    if (process.env.NODE_ENV === "development") {
      console.error(err);
    }
    res.status(500).send({ msg: "Internal server error" });
  }
};

export default Protect;
