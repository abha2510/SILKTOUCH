

const express=require("express");
const {CartModel}=require("../model/Cart.model");
const cartRouter =express.Router();



cartRouter.get("/",async(req,res)=>{
    const userId_making_req=req.body.userId;
    try {
        let user= await CartModel.find({"userId":userId_making_req});
         res.send(user)
    } catch (error) {
        console.log(error.message);
    }
})

cartRouter.post("/addproduct",async(req,res)=>{
    const payload=req.body; 
    try {
        const product=new CartModel(payload);
        await product.save();
        res.send("Product has been added")
    } catch (error) {
        res.send({"msg":"Something went wrong","error":error})
    }
})



cartRouter.patch("/update/inc/:id",async(req,res)=>{
    //  const pay=req.body;
    const id=req.params.id;
    let product=await CartModel.findOne({"_id":id});
    const userId_in_product=product.userId;
    const userId_making_req=req.body.userId;
     console.log(product.quantity)
     const payload = product.quantity+1
    try {
        if(userId_making_req!==userId_in_product){
            res.send({"msg":"You rae not Authorized"})
        }else{
            await CartModel.findByIdAndUpdate({"_id":id},{"quantity": payload});
            res.send("product has been updated")
        }
    } catch (error) {
        res.send({"msg":"Something went wrong","error":error})
    }
    })

    cartRouter.patch("/update/dec/:id",async(req,res)=>{
        //  const pay=req.body;
        const id=req.params.id;
        let product=await CartModel.findOne({"_id":id});
        const userId_in_product=product.userId;
        const userId_making_req=req.body.userId;
         console.log(product.quantity)
         const payload = product.quantity-1
        try {
            if(userId_making_req!==userId_in_product){
                res.send({"msg":"You rae not Authorized"})
            }else{
                await CartModel.findByIdAndUpdate({"_id":id},{"quantity": payload});
                res.send("product has been updated")
            }
        } catch (error) {
            res.send({"msg":"Something went wrong","error":error})
        }
        })
    
    cartRouter.delete("/delete/:id",async(req,res)=>{
        const id=req.params.id;
        let product=await CartModel.findOne({"_id":id});
        const userId_in_product=product.userId;
        const userId_making_req=req.body.userId;
        
        try {
            if(userId_making_req!==userId_in_product){
                res.send({"msg":"You rae not Authorized"})
            }else{
                await CartModel.findByIdAndDelete({"_id":id});
                res.send("product has been deleted")
            }
        } catch (error) {
            res.send({"msg":"Something went wrong","error":error})
        }
        })
    

module.exports={cartRouter}