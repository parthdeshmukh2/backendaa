const express = require("express");

const wishListController = express.Router();

const wishListModal = require("../Modals/wishlist.modal");

wishListController.post("/create", async (req, res) => {
    const {Title, Image, Price, Brand, userId} = req.body;
    const wishListItem = new wishListModal({
        Title, Image, Price,  Brand,  userId
    })
    await wishListItem.save()
    res.send({"message" : "Item Added To Cart", wishListItem})
})



wishListController.get("/", async (req, res) => {
    const {userId} = req.body
    const product = await wishListModal.find({userId})
    res.send(product)
 });



wishListController.delete("/:wishListId/delete", async (req, res) => {
   const {wishListId} = req.params;
   const {userId} = req.body;
   const wishList = await wishListModal.findOne({_id : wishListId})
  
   if(wishList.userId === userId){
      await wishListModal.findOneAndDelete({_id : wishListId})
      return res.send({"message" : "successfully deleted"})
   }
   else{
      return res.send("you are not authorised to do it")
   }
})

module.exports=wishListController

