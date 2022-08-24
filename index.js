

const express = require("express");


const app= express();

app.use(express.json());


const connection = require("./Config/db");
const UserModal = require("./Modals/data.modal");
const UserModal1 = require("./Modals/makeup.modal");
const UserModal2 = require("./Modals/bestSellers.modal");

app.post("/post", async (req, res)=>{
    const data = req.body;
    const newData = new UserModal(data);
    await newData.save();
    res.send("Post Successfull");

});

app.post("/makeup", async (req, res)=>{
    const data = req.body;
    const newData = new UserModal1(data);
    await newData.save();
    res.send("Post Successfull");

});

app.post("/bestSellers", async (req, res)=>{
    const data = req.body;
    const newData = new UserModal2(data);
    await newData.save();
    res.send("Post Successfull");

});


app.listen(8080, async ()=>{
    try {
        await connection ;
        console.log("Connected");
        
    } catch (error) {
        console.log(error);
    }
});

