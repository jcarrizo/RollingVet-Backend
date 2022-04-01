const Patiens = require("../models/patientsModel");

const AgregarPaciente = async (req, res) => {

  console.log(req.body)
  try {
    const newPatiens = await new Patiens({
      patientAnimalName: req.body.patientAnimalName,
      ownerName: req.body.ownerName,
      species: req.body.species,
      race: req.body.race,
      consultation: req.body.consultation,
      dateTime: req.body.dateTime,
    });
    const patients = await newPatiens.save();
    return res.json("correcto");
  } catch (error) {
    return res.json({
      message: error,
    });
  }
};

const ObtenerTodosPacientes = async (req, res) => {
  const patiens = await Patiens.find();
  res.json(patiens);
};

module.exports = {
  AgregarPaciente,
  ObtenerTodosPacientes
};