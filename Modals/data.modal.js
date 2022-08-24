const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    Title:String,
    Image:String,
    Price:Number,
    Description:String,
    Brand:String,
    Ingredients:[String],
    ProductInfo:String,
    HowToUse:[String],
    Images:[String]
 


});

const UserModal = mongoose.model("newArrival", userSchema);

module.exports = UserModal;