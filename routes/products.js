const express = require('express');
const router = express.Router()
const { body } = require('express-validator')
const { CreateProduct } = require('../controllers/products')

router.get('/', (req, res) => {
  res.send('todo okey')
})

router.post('/',

  body('name').trim().not().isEmpty().withMessage('No se aceptan vacios'),

  CreateProduct)

module.exports = router;