const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },

    bookName: {
        type: String,
    },
    bookPrice: {
        type: String,
    },
    // address: {
    //     type: String,
    // },
    bookImage: {
        type: String,
    },
    bookQuantity: {
        type: String,
    }
})

module.exports = mongoose.model("order", orderSchema)