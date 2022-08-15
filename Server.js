const express=require('express')
const mongoose=require('mongoose');
const addressRouter = require('./routes/address_routes');
const cartRouter = require('./routes/cart_routes');
const productsRouter = require('./routes/product_routes');
const orderRouter=require("./routes/order_routes")
const userRouter = require('./routes/user_routes');

const app=express()
const port= 4000;
app.use(express.json())

// user routes
app.use("/users",userRouter)

app.use("/uploads",express.static('uploads'))
// product route
app.use("/products",productsRouter)

// cart route
app.use('/carts',cartRouter)

// address route
app.use('/address',addressRouter)

// order route
app.use('/order',orderRouter)
mongoose.connect("mongodb+srv://admin:admin@cluster0.6uuki6v.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    app.listen(port,()=>{
        console.log("listening on "+ port);
    })

}).catch((er)=>{
    console.log(er);
})


