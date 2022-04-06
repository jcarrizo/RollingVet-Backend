const mongoose = require('mongoose')

const PatientsSchema = mongoose.Schema({
  patientAnimalName: {
    type: String,
    require: true
  },
  ownerName: {
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