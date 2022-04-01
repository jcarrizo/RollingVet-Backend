require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT
require('../db/connection')
const userRoute = require('../routes/user')
const patientsRoute = require('../routes/patients')
const productRoute = require('../routes/products')

app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY,Origin, X-Requested-with,Content-Type,Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
})
app.use('/api/products', productRoute);
app.use('/api/user', userRoute);
app.use('/api/patients', patientsRoute);
app.listen(PORT, console.log(`server escuchando ${PORT}`));