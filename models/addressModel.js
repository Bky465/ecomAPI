const mongoose=require('mongoose')

const addressSchema=mongoose.Schema({
     name:{  
          type:String,
          required:true
     },
     mobileNo:{
        type:String,
        required:true
     },
     pinCode:{
        type:String,
        required:true
     },
     address:{
        type:String,
        required:true
     }
})

module.exports=mongoose.model("address",addressSchema)