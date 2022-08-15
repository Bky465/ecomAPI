const mongoose=require('mongoose')

const bookSchema=mongoose.Schema({
  bookName:{
        type:String,
        required:true
    },
    bookDescription:{
        type:String,
        required:true
    },
    bookId:{
        type:mongoose.Types.ObjectId,
        ref:'user',
        required:true
    },
    bookImage:{
        type: String,
        required:true
    },
    bookPrice:{
        type:String,
        required:true
    },
    bookQuantity:{
        type:String,
        required:true
    },
    bookCategory:{
        type:String,
        required:true
    },
    bookAuthor:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports=mongoose.model("books",bookSchema)


                                                                                                                  