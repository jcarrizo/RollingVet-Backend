const express = require('express');
const router = express.Router()
const { AgregarPaciente, ObtenerTodosPacientes } = require('../controllers/patients');

router.post('/', AgregarPaciente);

// router.post('/patients', ConsultarPaciente);

router.post('/allPatients', ObtenerTodosPacientes);

// router.post('/deletePatients', EliminarPaciente);
// router.get('/', async (req, res) => {
//   try {
//     const getUser = await User.find({ email: email })
//     return res.json({
//       getUser,
//       message: "salio todo bien"
//     })
//   } catch (error) {
//     return res.json({
//       message: error
//     })
//   }
// })


// router.delete('/:userId', async (req, res) => {
//   try {
//     const getUser = await User.findByIdAndDelete(req.params.userId)
//     return res.json(getUser)
//   } catch (error) {
//     return res.json({
//       message: error
//     })
//   }
// })

// router.post('/', async (req, res) => {
//   try {
//     const newUser = await new User({
//       email: req.body.email,
//       password: req.body.password
//     });

//     const user = await newUser.save()

//     return res.json("correcto")
//   } catch (error) {
//     return res.json({
//       message: error
//     })
//   }
// })

module.exports = router;