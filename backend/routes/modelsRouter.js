const express = require("express");
const Swiggy = require("../models/swiggyModel");
const Zomato = require("../models/zomatoModel");
const Dominos = require("../models/Dominos.js");
const McDonalds = require("../models/McDonalds.js");

const router = express.Router();

const getModel = (company) => {
  switch (company) {
    case 'dominos': return Dominos;
    case 'mcdonalds': return McDonalds;
    case 'swiggy': return Swiggy;
    case 'zomato': return Zomato;
    default: throw new Error('Invalid company name');
  }
};

// Route for adding data
router.post('/:company', async (req, res) => {
  const { company } = req.params;
  const Model = getModel(company);
  const { name, location, category, price, ratings, image } = req.body;

  try {
    const newData = new Model({
      name,
      location,
      category,
      price,
      ratings,
      image,
      company_name: company,
    });

    const savedData = await newData.save();
    res.status(201).json(savedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error saving data" });
  }
});

module.exports = router;

