const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  typeProfile: {
    type: String,
    require: true
  },
  userName: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model('user', UserSchema);