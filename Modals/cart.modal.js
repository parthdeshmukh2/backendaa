const mongoose = require("mongoose");

const cartSchema   = new mongoose.Schema({
    Title:String,
    Image:String,
    Price:Number,
    Brand:String,
    Quantity:Number,
    userId:String
  
});

const CartModal = mongoose.model("cart", cartSchema);

module.exports = CartModal;