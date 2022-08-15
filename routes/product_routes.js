const express=require('express')
const { getProduct, createProduct, deleteProduct, updateProduct } = require('../controllers/productController')
const { auth } = require('../middleware/auth')
const productsRouter=express.Router()
const multer  = require('multer')

const storage=multer.diskStorage({
    destination:function (req,file,cb){
  cb(null,'./uploads/')
    },
    filename:function (req,file,cb){
    cb(null,file.originalname)
    }
})

const upload=multer({storage:storage})
productsRouter.get("/",auth,  getProduct)

productsRouter.post("/",auth,upload.single('productImage'), createProduct)

productsRouter.delete("/:id",auth,deleteProduct)

productsRouter.put("/:id",auth,upload.single('productImage'),updateProduct)
module.exports=productsRouter;
