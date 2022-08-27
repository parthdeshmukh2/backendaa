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
    let brand = req.query.brand || "All";

    const brandOptions = [
        "BalmLabs",
        "Hum Nutrition",
        "Oribe",
        "R+Co",
    
    ];
   

    brand === "All"
			? (brand = [...brandOptions])
			: (brand = req.query.brand.split(","));
		

        const newProduct = await UserModal.find({ Brand:brandOptions  })
        .where("brand")
        .in([...brand])
        return res.send(newProduct);

// try {
//     const data = await UserModal.find();
//   
// } catch (error) {
//    return res.send(error)
// }
    
   

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
