const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    confirm_email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    confirm_password:{
        type: String,
        required: true
    },
    mobile:{
        type: Number,
        required: true
    },
    refer_code:{
        type: String,
    },
    loyalty:{
        type: String,
    },
    userId:{
         type:String
    },
},{
    versionKey : false
})

const UserModel = mongoose.model("user", userSchema)

module.exports = {UserModel}

