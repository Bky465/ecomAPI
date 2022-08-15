const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    book_id: {
        type: String,
        required: true
    },
    bookName:{
    type:String
    },
    bookPrice: {
        type: String,
   
    },
    bookImage: {
        type: String,
    
    },
    bookQuantity: {
        type: String,
    }
})
module.exports=mongoose.model("carts",cartSchema)