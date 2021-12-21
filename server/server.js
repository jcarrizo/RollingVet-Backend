require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT
require('../db/connection')
const userRoute = require('../routes/user')

app.use(express.json())
app.use('/login', userRoute)
app.listen(PORT, console.log(`server escuchando ${PORT}`))