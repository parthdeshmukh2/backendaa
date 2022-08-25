const express = require("express");

const cartController = express.Router();

const CartModal = require("../Modals/cart.modal");

cartController.post("/create", async (req, res) => {
    const {Title, Image, Price, Brand, Quantity, userId} = req.body;
    const cartItem = new CartModal({
        Title, Image, Price,  Brand, Quantity, userId
    })
    await cartItem.save()
    res.send({"message" : "Item Added To Cart", cartItem})
})



cartController.get("/", async (req, res) => {
    const {userId} = req.body
    const product = await CartModal.find({userId})
    res.send(product)
 });

 cartController.patch("/:cartId/edit", async (req, res) => {
    const {cartId} = req.params;
    const {userId} = req.body;
    const cart = await CartModal.findOne({_id : cartId})
   
    if(cart.userId === userId){
       const new_cart = await CartModal.findOneAndUpdate({_id : cartId}, req.body, {new:true})
       return res.send({"message" : "successfully updated", new_cart})
    }
    else{
       return res.send("you are not authorised to do it")
    }
})

cartController.delete("/:cartId/delete", async (req, res) => {
   const {cartId} = req.params;
   const {userId} = req.body;
   const cart = await CartModal.findOne({_id : cartId})
  
   if(cart.userId === userId){
      await CartModal.findOneAndDelete({_id : cartId})
      return res.send({"message" : "successfully deleted"})
   }
   else{
      return res.send("you are not authorised to do it")
   }
})

module.exports=cartController

