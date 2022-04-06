const express = require('express');
const router = express.Router()
const { AgregarPaciente, ObtenerTodosPacientes, EliminarPaciente, EditarPaciente } = require('../controllers/patients');

router.post('/', AgregarPaciente);

// router.post('/patients', ConsultarPaciente);

router.post('/allPatients', ObtenerTodosPacientes);

router.post('/deletePatients', EliminarPaciente);

router.post('/editPatients', EditarPaciente);

module.exports = router;