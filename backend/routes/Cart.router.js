const express = require("express");
const {CartModel} = require("../model/Cart.model");
const {UserModel} = require("../model/User.model");
const {ProductModel}=require("../model/Products.model")
const cartRouter = express.Router();



cartRouter.patch("/addtocart", async (req, res) => {
    const userID=req.body.userId;

    const getdata = req.body;

    const cartdata =await ProductModel.findOne(getdata);
    console.log(cartdata)
    const user=await UserModel.findOne({_id:userID})
    user.cart.push(cartdata)
  
     await UserModel.findByIdAndUpdate({_id:userID},user)
     res.send(user)  

    
});



cartRouter.delete("/delete/:id", async (req, res) => {
    const itemID=req.params.id;

    const userID=req.body.userId;
 
    const user=await UserModel.findOne({_id:userID})
    console.log(user.cart);
     let arr=[];
     user.cart.map((el)=>{
         if(el.id===itemID){
             arr.push(el)
             //console.log(el);
        }else{
            console.log('buddhu ladki')
        }
    })
  
     res.send(user) 
});


module.exports={cartRouter}










