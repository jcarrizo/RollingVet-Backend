const Login = require('../models/loginModel')

// const loginUser = async (req, res) => {
//   try {
//     const { email } = req.query
//     const getLogin = await login.find({ email: email })
//     // console.log(req.query)
//     return res.json({
//       getLogin,
//       message: "salio todo bien"
//     })
//   } catch (error) {
//     return res.json({
//       message: error
//     })
//   }
// }

const LoginUser = async (req, res) => {
  console.log(req.body)
  const { email, password } = req.body
  const logins = await Login.find({ email: email })
  res.json(logins);
}

module.exports = { LoginUser }