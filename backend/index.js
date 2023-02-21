const express=require("express");
require('dotenv').config();
const {connection} =require("./config/db")
const app=express();

app.use(express.json());


app.listen(process.env.port,async()=>{
    try {
        
        await connection
        console.log("Connected yo DB!!");
    } catch (error) {
        console.log(error.message);
    }
   console.log(`sever running at port ${process.env.port}`)
})