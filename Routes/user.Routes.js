const express = require("express");

const UserModal4 = require("../Modals/users.modal");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const userController = express.Router();

userController.post("/signup", async(req, res)=>{
    let {Email, Password, FirstName, LastName} = req.body;
    bcrypt.hash(Password,6,async function(err, hash) {
        if(err){
                return res.send("invalid")
        }

        // Store hash in your password DB.
        const user = new UserModal4({Email, Password:hash, FirstName, LastName});
            await user.save();
    res.send("SignUp Successfull")
    });
    
     
})

userController.post("/login", async(req, res)=>{
    
   let {Email, Password} = req.body;
   const user = await UserModal4.findOne({Email});
   console.log(user)
   if(!user) return res.send("Login Fail");
   else{
       const hash = user.Password;
       const userId = user._id;
       bcrypt.compare (Password, hash, function(err, result) {
        if(result) {
            let token = jwt.sign({Email, userId }, 'secret');
            return res.send({"message" : "LoginSuccesfull",token})
        }
        else{
            return res.send("Invalid");
        }
      });


   }
    
     
})

module.exports = userController;