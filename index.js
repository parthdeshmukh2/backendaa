
const express = require("express");
var cors = require('cors')
require('dotenv').config()

const app= express();
app.use(cors())

app.use(express.json());

const connection = require("./Config/db");
const makeUpController = require("./Routes/makeUp.Routes");
const newArrivalController = require("./Routes/newArrival.Routes");
const bestSellerController = require("./Routes/bestSellers.Routes");
const userController = require("./Routes/user.Routes");
const authentication = require("./Middlewares/Authentication");
const cartController = require("./Routes/cart.Routes");
const wishListController = require("./Routes/wishlist.Routes");

app.get("/", (req, res)=>{
    return res.send("Home")
});

app.use("/user", userController);



app.use("/makeup", makeUpController);
app.use("/newarrival", newArrivalController);
app.use("/bestsellers", bestSellerController);

app.use(authentication);

app.use("/cart", cartController);
app.use("/wishlist", wishListController);



app.listen(process.env.PORT, async ()=>{
    try {
        await connection ;
        console.log("Connected");
        
    } catch (error) {
        console.log(error);
    }
});

