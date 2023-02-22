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
    cart:[
        {
            id: String,
            logo: String,
            name: String,
            description: String,
            image_1: String,
            image_2: String,
            image_3: String,
            category: String,
            rating: Number,
            review: Number,
            price: Number,
            discounted: Number,
            quantity: Number,
            total_item_in_cart: Number,
            likes: Number,
            stocks: Number,
            gender:String,
            brand:String

        }
    ]
},{
    versionKey : false
})

const UserModel = mongoose.model("user", userSchema)

module.exports = {UserModel}

