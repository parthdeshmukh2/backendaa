const express = require("express");

const newArrivalController = express.Router();

const UserModal = require("../Modals/data.modal");

newArrivalController.post("/post", async (req, res)=>{
    const data = req.body;
    const newData = new UserModal(data);
    await newData.save();
    res.send("Post Successfull");

});

newArrivalController.get("/", async (req, res)=>{

try {
    const data = await UserModal.find();
   return res.send(data);
} catch (error) {
   return res.send(error)
}
    
   

});

newArrivalController.get("/:id", async (req, res)=>{
    let id = req.body.id;

    try {
        const data = await UserModal.findOne({id});
       return res.send(data);
    } catch (error) {
       return res.send(error)
    }
 
    });



module.exports=newArrivalController;
