const express = require("express");
const {CartModel} = require("../model/Cart.model");
const {UserModel} = require("../model/User.model");
const {ProductModel}=require("../model/Products.model")
const cartRouter = express.Router();


// cartRouter.get("/:userId",async(req,res)=>{
//     try {
//       let product= await UserModel.find();
//       res.send(product);
//       console.log("aaagyaaa")
//     } catch (error) {
//         console.log(error.message);
//     }
// })

cartRouter.patch("/addtocart", async (req, res) => {
    const userID=req.body.userId;

    const getdata = req.body;

    const cartdata =await ProductModel.findOne(getdata);
    console.log(cartdata)
    const user=await UserModel.findOne({_id:userID})
    user.cart.push(cartdata)
  
     await UserModel.findByIdAndUpdate({_id:userID},user)
     res.send(user)  

    //  console.log(user,userID)
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
    //console.log(arr)
//   await UserModel.findByIdAndDelete({_id})
     res.send(user) 
});


module.exports={cartRouter}











//to get cart data url
// cart.get("/:userId", async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const cartdata = await UserModel.find({
//       _id: userId,
//     });
//     res.status(200).send(cartdata);
//   } catch (error) {
//     res.status(404).send(error.message);
//   }
// });



// //post item to cart
// cart.post("/", async (req, res) => {
//   try {
//     const getdata = req.body;
//     const cartdata = CartModel(getdata);
//     await cartdata.save();
//     res.status(200).send(cartdata);
//   } catch (error) {
//     res.status(404).send(error.message);
//   }
// });

// cart.get("/", async(req, res) => {
//     try {
//         let item= await CartModel.find();
//          res.send(item)
//     } catch (error) {
//         console.log(error.message);
//     }
//   });

// cart.patch("/inc/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { itemid } = req.query;
//     console.log(id);
//     console.log(itemid);
//     let newdata = await UserModel.updateMany(
//       { _id: id, "cartItems._id": itemid },
//       { $inc: { "cartItems.$.quantity": 1 } }
//     );
//     res.status(200).send(newdata);
 
//   } catch (error) {
//     res.send(error);
//   }
// });


// cart.patch("/dec/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { itemid } = req.query;
//     console.log(id);
//     console.log(itemid);
//     let newdata = await UserModel.updateMany(
//       { _id: id, "cartItems._id": itemid },
//       { $inc: { "cartItems.$.quantity": -1 } }
//     );
//     res.send(newdata).status(200);

//   } catch (error) {
//     res.send(error);
//   }
// });

// //delete item
// cart.delete("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { cartitemid } = req.query;

//     const cartdata = await UserModel.updateOne(
//       { _id: id, "cartItems._id": cartitemid },
//       { $pull: { cartItems: { _id: cartitemid } } }
//     );
//     console.log(cartdata);
//     res.send(cartdata);
//   } catch (error) {
//     res.send(error.message);
//   }
// });


// cart.delete("/all/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     let user = await UserModel.findById(id);
//     user.cartItems = [];
//     await user.save();
//   } catch (error) {
//     res.status(404).send(error.message);
//   }
// });


// cart.get("/count", async (req, res) => {
//   try {
//     const cartdata = await CartModel.countDocuments();
//     console.log(cartdata);
//     res.send((count = cartdata.toString())).status(200);
//   } catch (error) {
//     res.status(404).send(error.message);
//   }
// });

// module.exports = {cart};