const User = require("../models/userModel");

const AgregarUsuario = async (req, res) => {
  try {
    const newUser = await new User({
      email: req.body.email,
      password: req.body.password,
      userName: req.body.userName,
    });
    const user = await newUser.save();
    return res.json("correcto");
  } catch (error) {
    return res.json({
      message: error,
    });
  }
};

const ConsultarUser = async (req, res) => {
  console.log(req.body)
  const { email, password } = req.body;
  const logins = await User.find({ email: email });
  console.log(logins)
  res.json(logins);
};

const ObtenerTodosUsuarios = async (req, res) => {
  const logins = await User.find();
  // console.log(logins)
  res.json(logins);
};

const EliminarUser = async (req, res) => {
  // console.log(req.body)
  try {
    const getUser = await User.findByIdAndDelete(req.body.id);
    return res.json(getUser);
  } catch (error) {
    return res.json({
      message: error,
    });
  }
};

module.exports = {
  AgregarUsuario,
  ConsultarUser,
  ObtenerTodosUsuarios,
  EliminarUser,
};
