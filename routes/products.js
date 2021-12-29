const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
  res.send('todo okey')
})

module.exports = router;