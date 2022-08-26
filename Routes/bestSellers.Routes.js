const express = require("express");

const bestSellerController = express.Router();

const UserModal2 = require("../Modals/bestSellers.modal");

bestSellerController.post("/post", async (req, res) => {
  const data = req.body;
  const newData = new UserModal2(data);
  await newData.save();
  res.send("Post Successfull");
});


bestSellerController.get("/", async (req, res) => {
  try {
    const data = await UserModal2.find();
    return res.send(data);
  } catch (error) {
    return res.send(error);
  }
});

bestSellerController.get("/:id", async (req, res) => {
  let id = req.body.id;
  try {
    const data = await UserModal2.findOne({id});
    return res.send(data);
  } catch (error) {
    return res.send(error);
  }
});

module.exports=bestSellerController
