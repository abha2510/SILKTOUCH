const express=require("express");
const {UserModel}=require("../model/User.model");
const userRouter =express.Router();
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");

userRouter.get("/",async(req,res)=>{
    try {
        let user= await UserModel.find();
         res.send(user)
    } catch (error) {
        console.log(error.message);
    }
})

userRouter.post("/register",async(req,res)=>{
    const {name,email,confirm_email,password,confirm_password,mobile}=req.body; 
    try {
        bcrypt.hash(password,5,async(err,secure_password)=>{
            if(err) res.send("User already exist, please login")
           else{
            const user=new UserModel({name,email,confirm_email,password:secure_password,confirm_password,mobile});
            await user.save();
            res.send("New User Registered")
           }
        })
    } catch (error) {
        res.send("User already exist, please login")
    }
})

// {
//     "name":"Abha",
//     "email":"abha@gmail.com",
//     "confirm_email":"abha@gmail.com",
//     "password":"abha",
//     "confirm_password":"abha",
//     "mobile":7896543210
//     }


userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    try {
        const user=await UserModel.find({email});
        const hashed_pass=user[0].password;
        if(user.length>0){
            bcrypt.compare(password,hashed_pass,(err,result)=>{
                if(result){
                    const token=jwt.sign({userId:user[0]._id},process.env.key);
                    res.send({"msg":"Login Sucessfully!!","token":token})
                }else{
                    res.send("Wrong Credential")
                }
            });
        }else{
            res.send("Wrong Credential")
        }
    } catch (error) {
        
    }
})
module.exports={userRouter}