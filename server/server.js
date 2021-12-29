require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT
require('../db/connection')
const userRoute = require('../routes/user')
const productRoute = require('../routes/products')

app.use(express.json());
app.use('/api/products', productRoute);
app.use('/api/login', userRoute);
app.listen(PORT, console.log(`server escuchando ${PORT}`));