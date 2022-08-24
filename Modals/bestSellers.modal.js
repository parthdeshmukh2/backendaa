const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    Title:String,
    Image:String,
    Price:Number,
    Brand:String,

});

const UserModal2 = mongoose.model("bestSellers", userSchema);

module.exports = UserModal2;