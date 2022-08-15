const productModel = require('../models/products')

const cloudinary = require('cloudinary').v2
cloudinary.config({
  cloud_name: 'dtnubr446',
  api_key: '166756217462864',
  api_secret: 'AZdvdpYYKxl8Z-MnYvXopVxVr1w',

});

const createProduct = (req, res) => {
  const { title, description, price, quantity, category, author } = req.body
  const file = req.file

  cloudinary.uploader.upload(file.path, (err, result) => {
    const newBook = new productModel({
      bookName: title,
      bookDescription: description,
      bookId: req.userId,
      bookImage: result.url,
      bookPrice: price,
      bookQuantity: quantity,
      bookCategory: category,
      bookAuthor: author
    })
    try {
      newBook.save()
        .then(
          res.status(201).json(newBook)
        )
    }
    catch (error) {
      console.log(error);
      res.status(500).json({ message: "something went wrong" })
    }
  })
}

// update functionality
const updateProduct = async (req, res) => {
  const id = req.params.id
  try {
    const newProduct = await productModel.findByIdAndUpdate(id, req.body, { new: true })
    res.status(201).json(newProduct)
  } catch (error) {
    console.log(error);
  }
}


// delete functionality
const deleteProduct = async (req, res) => {
  const id = req.params.id
  try {
    const book = await productModel.findByIdAndDelete(id)
    res.status(202).json(book)

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" })
  }
}


const getProduct = async (req, res) => {
  try {
    await productModel.find({}).then((book) => {
      res.status(202).json(book)
    }).catch((er) => {
      console.log(er);
      res.status(500).json({ message: "something went wrong" })
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" })
  }
}

module.exports = {
  createProduct, updateProduct, deleteProduct, getProduct
}