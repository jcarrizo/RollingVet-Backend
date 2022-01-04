const mongoose = require('mongoose')

const LoginSchema = mongoose.Schema({
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
  }
})


module.exports = mongoose.model('login', LoginSchema);