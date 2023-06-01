const express = require("express");
const { RestaurantModel } = require("../models/restaurant.model");

const restaurantrouter = express.Router();

restaurantrouter.get("/", async (req, res) => {
    let data = await RestaurantModel.find();
    res.send(data)
})

restaurantrouter.get("/:id", async (req, res) => {
    let id = req.params.id
    let data = await RestaurantModel.find({ _id: id });
    res.send(data)
})

restaurantrouter.get("/:id/menu", async (req, res) => {
    let id = req.params.id
    let data = await RestaurantModel.find({ _id: id });
    res.send(data[0].menu)
})

restaurantrouter.post("/:id/menu", async (req, res) => {
    let id = req.params.id;
    let { name, description, price, image } = req.body;

    let restaurant = await RestaurantModel.findById(id);

    let menuObject = {
        name,
        description,
        price,
        image
    };

    restaurant.menu.push(menuObject);
    await restaurant.save();
    res.send("Item added successfully")
})

restaurantrouter.delete("/:id/menu/:menuid", async (req, res) => {
    let { id, menuid } = req.params;

    try {
        let restaurant = await RestaurantModel.findById(id);

        if (restaurant) {
            for (let i = 0; i < restaurant.menu.length; i++) {
                if (restaurant.menu[i]._id == menuid) {
                    restaurant.menu.splice(i, 1);
                    await restaurant.save();
                    res.send("Menu Deleted");
                    break;
                }
            }
        } else {
            res.send("Restaurant ID Wrong");
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error.' });
    }
});

module.exports = {
    restaurantrouter
}