const Products = require('../models/productsModel')

const CreateProduct = async (req, res) => {
  try {
    const newProducts = new Products({
      name: req.body.name,
      category: req.body.category,
      stock: req.body.stock
    });

    // const newProducts = await Products.create({
    //   name: req.body.name,
    //   category: req.body.category,
    //   stock: req.body.stock
    // })

    const products = await newProducts.save()

    return res.json(products)
  } catch (error) {
    return res.json({
      message: error
    })
  }
}

module.exports = { CreateProduct } 