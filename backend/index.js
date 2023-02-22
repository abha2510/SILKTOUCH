const express=require("express");
require('dotenv').config();
const {connection} =require("./config/db")
const {userRouter}=require("./routes/User.route")
const {productRouter}=require("./routes/Product.router")
const {authenticate}=require("./middleware/authenticate.middleware")
const app=express();

app.use(express.json());

app.use("/users",userRouter);
app.use(authenticate);
app.use("/products",productRouter)

app.listen(process.env.port,async()=>{
    try {
        
        await connection
        console.log("Connected yo DB!!");
    } catch (error) {
        console.log(error.message);
    }
   console.log(`sever running at port ${process.env.port}`)
})