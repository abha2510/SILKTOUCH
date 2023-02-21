const express = require("express");
const {UserModel} = require("../models/User.model");
require('dotenv').config()
const key= process.env.key
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
const authentication = express.Router();

// Signup
authentication.post("/signup", async(req, res)=>{
    const {
        name,
        email,
        confirm_email,
        password,
        confirm_password,
        mobile,
        refer_code,
        loyalty
    } = req.body

    if(!name || !email || !password || !confirm_email || !confirm_password || !mobile ){
        res.send("Please provide all mandatory details");
    }else if(password !== confirm_password){
        res.send("Passwords do not match");
    }
    else if(email !== confirm_email){
        res.send("Emails do not match");
    }
    else{
        try{
            const existedUser= await UserModel.find(email)
            if(existedUser){
               return res.send("User already exists").status(201);
            }
            bcrypt.hash(password,8,async(err,hash) =>{
                const user = new UserModel({name,email,confirm_email,password:hash,confirm_password:hash,mobile,refer_code,loyalty})
                await user.save()
                return res.send(user)
            })
        }catch(err){
            return res.send(err.message).status(500)
        }
    }
})

//Login
authentication.post("/login", async(req,res)=>{
    const {email,password} = req.body;

    if(!email || !password){
        return res.send("Please fill all details")
    }
    const user = UserModel.findOne({email});
    if(!user){
        return res.send({msg:"User Not Found"}).status(200);

    }
    try{
        bcrypt.compare(password,user.password,function(err,result){
            if(!result){
                return res.send("Invalid Credentials").status(200);
            }
            let token = jwt.sign({email,name:user.name,id:user._id},key)
            return res.send({msg:"Login Successful",token:token}).status(200)
        })
    }catch(err){
        res.send(err.message).status(500)
    }
})

module.exports={
    authentication
}