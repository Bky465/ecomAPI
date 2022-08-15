const express=require('express')
const { createAddress } = require('../controllers/addressController')
const {auth}=require('../middleware/auth')


const addressRouter=express.Router()
addressRouter.post("/",auth,createAddress)

module.exports=addressRouter