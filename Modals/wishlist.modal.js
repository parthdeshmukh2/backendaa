const mongoose = require("mongoose");

const wishListSchema  = new mongoose.Schema({
    Title:String,
    Image:String,
    Price:Number,
    Brand:String,
    userId:String
  
});

const wishListModal = mongoose.model("wishList", wishListSchema);

module.exports = wishListModal;