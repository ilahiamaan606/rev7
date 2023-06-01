const express = require('express');
const { OrderModel } = require('../models/order.model');
const { UserModel } = require('../models/user.model');
const { RestaurantModel } = require('../models/restaurant.model');

const orderrouter = express.Router();


orderrouter.post("/", async (req, res) => {

    // user: { type: mongoose.Types.ObjectId, ref: 'user' },
    // restaurant: { type: mongoose.Types.ObjectId, ref: 'restaurant' },
    // items: [{
    //     name: String,
    //     price: Number,
    //     quantity: Number
    // }],
    // totalPrice: Number,
    // deliveryAddress: {
    //     street: String,
    //     city: String,
    //     state: String,
    //     country: String,
    //     zip: String
    // },
    // status: String
    
    let { user, restaurant,items,deliveryAddress,status} = req.body;

    try {
        const userdata = await UserModel.findById(user);
        const restaurantdata = await RestaurantModel.findById(restaurant);

        // res.send({userdata,flightdata})

        if (!userdata || !restaurantdata) {
            return res.status(404).json({ error: 'User or restaurant not found.' });
        }

        let totalPrice=0;

        items.forEach(element => {
            totalPrice+=element.price*element.quantity
        });

        let order = new OrderModel({
            user: userdata,
            restaurant: restaurantdata,
            items,
            totalPrice,
            deliveryAddress,
            status
        });
        await order.save();

        res.send("Order Success")

    } catch (error) {

        res.status(500).json({ error: error.message })
    }
});


orderrouter.get("/:id", async (req, res) => {
    try {
        let data = await OrderModel.find({_id:req.params.id}).populate('user').populate('restaurant');
        res.send(data)

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

orderrouter.patch('/:id', async (req, res) => {
    let id=req.params.id
    const updateData = req.body;

    await OrderModel.findByIdAndUpdate(id, updateData);
    
    res.send("Updated Successfully")
})  

module.exports = {
    orderrouter
}