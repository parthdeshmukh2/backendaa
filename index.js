

const express = require("express");
require('dotenv').config()

const app= express();

app.use(express.json());
const userControl = express.Router();


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

app.get("/get", async (req, res)=>{

try {
    const data = await UserModal.find();
   return res.send(data);
} catch (error) {
   return res.send(error)
}
    
   

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

app.get('/', (req, res)=>{
    return res.send("Home")
})

app.listen(process.env.PORT, async ()=>{
    try {
        await connection ;
        console.log("Connected");
        
    } catch (error) {
        console.log(error);
    }
});

