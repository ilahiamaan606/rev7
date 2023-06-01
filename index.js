const express=require("express");
const {connection}=require("./db");
const {userrouter}=require("./routes/user.routes")
const {restaurantrouter}=require("./routes/restaurant.routes")
const {orderrouter}=require("./routes/order.route")
require("dotenv").config()

const app=express();
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Home page")
})

app.use("/user",userrouter);
app.use("/restaurants",restaurantrouter);
app.use("/order",orderrouter);

app.listen(process.env.port,async ()=>{
    await connection;
    console.log(`Server running at ${process.env.port}`)
})