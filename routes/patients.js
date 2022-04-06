const express = require('express');
const router = express.Router()
const { AgregarPaciente, ObtenerTodosPacientes, EliminarPaciente } = require('../controllers/patients');

router.post('/', AgregarPaciente);

// router.post('/patients', ConsultarPaciente);

router.post('/allPatients', ObtenerTodosPacientes);

router.post('/deletePatients', EliminarPaciente);

module.exports = router;