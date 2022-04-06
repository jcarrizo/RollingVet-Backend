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

const EditarPaciente = async (req, res) => {
  try {
    const getPatients = await Patiens.findByIdAndUpdate(req.body._id, {
      patientAnimalName: req.body.patientAnimalName,
      ownerName: req.body.ownerName,
      species: req.body.species,
      race: req.body.race,
      consultation: req.body.consultation,
      dateTime: req.body.dateTime,
    }, { new: true });
    return res.json(getPatients);
  } catch (error) {
    return res.json({
      message: error,
    });
  }
}

const EliminarPaciente = async (req, res) => {
  console.log(req.body)
  try {
    const getPatients = await Patiens.findByIdAndDelete(req.body._id);
    return res.json(getPatients);
  } catch (error) {
    return res.json({
      message: error,
    });
  }
};


module.exports = {
  AgregarPaciente,
  ObtenerTodosPacientes,
  EliminarPaciente,
  EditarPaciente
};