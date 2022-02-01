const User = require('../models/userModel')

const AgregarUsuario = async (req, res) => {
  try {
    const newUser = await new User({
      email: req.body.email,
      password: req.body.password,
      typeProfile: req.body.typeProfile,
      userName: req.body.userName,
    });

    const user = await newUser.save()

    return res.json("correcto")
  } catch (error) {
    return res.json({
      message: error
    })
  }
}

const ConsultarUser = async (req, res) => {
  console.log(req.body)
  const { email, password } = req.body
  const logins = await User.find({ email: email })
  res.json(logins);
}


module.exports = { AgregarUsuario, ConsultarUser }