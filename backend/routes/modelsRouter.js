const express = require("express");
const Swiggy = require("../models/swiggyModel.js");
const Zomato = require("../models/zomatoModel.js");

const router = express.Router();

// Route for adding data to the Swiggy model
router.post("/swiggy", async (req, res) => {
  const { name, location, place, price, ratings } = req.body;

  try {
    const swiggyData = new Swiggy({
      name,
      location,
      place,
      price,
      ratings,
    });

    const savedData = await swiggyData.save();
    res.status(201).json(savedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error saving Swiggy data" });
  }
});

// Route for adding data to the Zomato model
router.post("/zomato", async (req, res) => {
  const { name, location, place, price, ratings } = req.body;

  try {
    const zomatoData = new Zomato({
      name,
      location,
      place,
      price,
      ratings,
    });

    const savedData = await zomatoData.save();
    res.status(201).json(savedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error saving Zomato data" });
  }
});

module.exports = router;
