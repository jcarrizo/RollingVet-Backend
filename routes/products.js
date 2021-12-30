const express = require('express');
const router = express.Router()
const { CreateProduct } = require('../controllers/products')

router.get('/', (req, res) => {
  res.send('todo okey')
})


router.post('/', CreateProduct)

module.exports = router;