const express = require('express');
const router = express.Router();
const { LoginUser } = require('../controllers/login');

// router.get('/', loginUser);
// router.post('/', async (req, res) => {
//   try {
//     const newlogin = await new Login({
//       email: req.body.email,
//       password: req.body.password
//     });

//     const login = await newlogin.save()

//     return res.json("correcto")
//   } catch (error) {
//     return res.json({
//       message: error
//     })
//   }
// })


// router.post('/', async (req, res) => {
//   console.log(req.body)
//   const { email, password } = req.body
//   const logins = await Login.find({ email: email })
//   res.json(logins);
// });

router.post('/', LoginUser);

module.exports = router;
