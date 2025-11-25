const Register = async (req, res) => {
  console.info(req.body);

  res.send({ msg: "Response send" });
};

export default Register;
