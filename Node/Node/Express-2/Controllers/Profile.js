const Profile = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(404).send({ msg: "User not found" });
    }

    res.status(200).send({ user: req.user });
  } catch (err) {
    if (process.env.NODE_ENV === "development") {
      console.error(err);
    }
    res.status(500).send({ msg: "Internal server error" });
  }
};

export default Profile