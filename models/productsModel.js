const mongoose = require('mongoose')

const ProductsSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  category: {
    type: String,
    require: true
  },
  stock: Number
})


module.exports = mongoose.model('product', ProductsSchema);