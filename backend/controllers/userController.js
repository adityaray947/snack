const asyncHandler = require('express-async-handler');
const generateToken = require('../config/generateToken.js');
const User = require('../models/userModel.js');
const Swiggy = require('../models/swiggyModel.js');
const Zomato = require('../models/zomatoModel.js');
const DominosModel=require("../models/Dominos.js")
const McDonaldsModel=require("../models/McDonalds.js")
const { MongoClient } = require('mongodb');



const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please enter all the fields");
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("Email already exists");
    }

    const user = await User.create({
        name,
        email,
        password,
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error("User not found");
    }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid email or password');
  }
});

const searchItem = asyncHandler(async (req, res) => {
  const { itemName } = req.body;

  if (!itemName) {
    res.status(400).json({ message: 'Item name is required' });
    return;
  }

  try {
    const regex = new RegExp(itemName, 'i'); // Case-insensitive search

    const swiggyItems = await Swiggy.find({ name: regex }).exec();
    const zomatoItems = await Zomato.find({ name: regex }).exec();
    const dominosItems = await DominosModel.find({ name: regex }).exec();
    const mcdonaldsItems = await McDonaldsModel.find({ name: regex }).exec();

    const allItems = [...swiggyItems, ...zomatoItems, ...dominosItems, ...mcdonaldsItems];

    if (allItems.length === 0) {
      res.status(404).json({ message: 'Item not found' });
      return;
    }

    // Sort items by price from low to high
    const sortedItems = allItems.sort((a, b) => a.price - b.price);

    res.json({
      items: sortedItems
    });
  } catch (error) {
    console.error('Error fetching item:', error);
    res.status(500).json({ message: 'Server error' });
  }
});






module.exports = { registerUser, authUser,searchItem };
