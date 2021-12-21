const mongoose = require('mongoose')
require('dotenv').config();

const connectionDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION);
    console.log("conectado exitosamente")
  } catch (error) {
    console.log('ocurrio un error', error);
  }
}
connectionDB()
module.exports = { connectionDB };