const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    Email:{type:String},
    Password:{type:String},
    FirstName:{type:String},
    LastName:{type:String},

});

const UserModal4 = mongoose.model("user", userSchema);

module.exports = UserModal4;