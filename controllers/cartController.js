const cartModel=require ('../models/cartModel')
const productModel=require('../models/products')

const createCart= async (req,res)=>{
 
    const {book_id}=req.body
    console.log(book_id);
    const cart_product=await productModel.findById(book_id)
    console.log(cart_product);
    const cart_prod=new cartModel({
        user_id:req.userId,
        book_id:req.userId,
        bookName:cart_product.bookName,
        bookPrice:cart_product.bookPrice,
        bookImage:cart_product.bookImage,
        bookQuantity:cart_product.bookQuantity
    })
   console.log(cart_prod);
    try {
    await cart_prod.save()
        res.status(201).json(cart_prod)

    } catch (error) {
        console.log(error);
        res.status(500).json({message:"something went wrong"})
    }
}

// delete cart product
const deleteCart= async (req,res)=>{
    const id = req.params.id
    try {
     const cart_product=await cartModel.findByIdAndDelete(id)
     res.status(202).json(cart_product)

    }
    catch (error) {
     console.log(error);
     res.status(500).json({ message: "something went wrong" })
    }
}
const getCart= async (req,res)=>{
    try {
        const cart_product=await cartModel.find({user_id:req.userId})
        res.status(202).json(cart_product)
     } catch (error) {
        console.log(error);
        res.status(500).json({message:"something went wrong"})
     }
}

module.exports={
    createCart,deleteCart,getCart
}