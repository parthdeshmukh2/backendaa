const express = require("express");

const makeUpController = express.Router();

const UserModal1 = require("../Modals/makeup.modal")

makeUpController.post("/makeup", async (req, res)=>{
    const data = req.body;
    const newData = new UserModal1(data);
    await newData.save();
    res.send("Post Successfull");

});

makeUpController.get("/", async (req, res)=>{

    try {
        const data = await UserModal1.find();
       return res.send(data);
    } catch (error) {
       return res.send(error)
    }
        
       
    
    });
    makeUpController.get("/:id", async (req, res)=>{
        let id = req.body.id

        try {
            const data = await UserModal1.findOne({id});
           return res.send(data);
        } catch (error) {
           return res.send(error)
        }
            
           
        
        });

module.exports= makeUpController
