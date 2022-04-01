const mongoose = require('mongoose')

const PatientsSchema = mongoose.Schema({
  patientAnimal: {
    type: String,
    require: true
  },
  OwnerName: {
    type: String,
    require: true
  },
  species: {
    type: String,
    require: true
  },
  race: {
    type: String,
    require: true
  },
  consultation: {
    type: String,
    require: true
  }
  ,
  dateTime: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model('patients', PatientsSchema);