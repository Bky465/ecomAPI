const express=require('express')
const { createOrder, getOrder } = require('../controllers/orderController')
const { auth } = require('../middleware/auth')


const orderRouter=express.Router()

orderRouter.post('/',auth,createOrder)
orderRouter.get('/',auth,getOrder)

module.exports=orderRouter