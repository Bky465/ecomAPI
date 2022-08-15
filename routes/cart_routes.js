const express=require('express')
const { createCart, deleteCart, getCart } = require('../controllers/cartController')
const { auth } = require('../middleware/auth')

const cartRouter=express.Router()


cartRouter.post("/",auth, createCart)

cartRouter.delete("/:id",auth,deleteCart)

cartRouter.get('/',auth,getCart)
module.exports=cartRouter