import User from "../Models/User.js";

const Profile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");

    if (!user) {
      return res.status(404).send({ msg: "User does not exist!" });
    }

    res.status(200).send({
      msg: "User authorized",
      user,
    });
  } catch (err) {}
};

export default Profile;
