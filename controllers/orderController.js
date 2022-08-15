const orderModel = require('../models/orderModel')
const cartModel = require('../models/cartModel')
// post 
const createOrder = async (req, res) => {
    const { userId } = req.body;
    console.log(userId);
    const order_product = await cartModel.find({ "user_id": userId })
    const order_prod = []
    order_product.forEach(elem => {
        order_prod.push(new orderModel({
            userId: req.userId,
            bookName: elem.bookName,
            bookPrice: elem.bookPrice,
            bookImage: elem.bookImage,
            bookQuantity: elem.bookQuantity
        }))
    })

    try {
           orderModel.insertMany(order_prod).then(res=>{
   console.log("inserted");
           }).catch((er)=>{
            console.log(er);
           })
           res.status(200).json(order_prod)
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"something went wrong"})
    }
}

// get
const getOrder = async (req, res) => {
    try {
        await orderModel.find({}).then((order) => {
            res.status(202).json(order)
        }).catch((er) => {
            console.log(er);
            res.status(500).json({ message: "something went wrong" })
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" })
    }
}

module.exports = { createOrder, getOrder }