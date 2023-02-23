const express=require("express");
const {ProductModel}=require("../model/Products.model");
const productRouter =express.Router();



productRouter.get("/",async(req,res)=>{
    try {
        let user= await ProductModel.find();
         res.send(user)
    } catch (error) {
        console.log(error.message);
    }
})

productRouter.post("/addproduct",async(req,res)=>{
    const payload=req.body; 
    try {
        const product=new ProductModel(payload);
        await product.save();
        res.send("Product has been added")
    } catch (error) {
        res.send({"msg":"Something went wrong","error":error})
    }
})



productRouter.patch("/update/:id",async(req,res)=>{
    const payload=req.body;
    const id=req.params.id;
    let product=await ProductModel.findOne({"_id":id});
    const userId_in_product=product.userId;
    const userId_making_req=req.body.userId;
    
    try {
        if(userId_making_req!==userId_in_product){
            res.send({"msg":"product not found"})
        }else{
            await ProductModel.findByIdAndUpdate({"_id":id},payload);
            res.send("product has been updated")
        }
    } catch (error) {
        res.send({"msg":"Something went wrong","error":error})
    }
    })
    
    productRouter.delete("/delete/:id",async(req,res)=>{
        const id=req.params.id;
        let product=await ProductModel.findOne({"_id":id});
        const userId_in_product=product.userId;
        const userId_making_req=req.body.userId;
        
        try {
            if(userId_making_req!==userId_in_product){
                res.send({"msg":"product not found"})
            }else{
                await ProductModel.findByIdAndDelete({"_id":id});
                res.send("product has been deleted")
            }
        } catch (error) {
            res.send({"msg":"Something went wrong","error":error})
        }
        })
    

module.exports={productRouter}