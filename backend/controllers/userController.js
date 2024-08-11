const asyncHandler = require('express-async-handler');
const generateToken = require('../config/generateToken.js');
const User = require('../models/userModel.js');
const Swiggy = require('../models/swiggyModel.js');
const Zomato = require('../models/zomatoModel.js');
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
    res.status(400);
    throw new Error('Item name is required');
  }

  
  const swiggyItems = await Swiggy.find({ name: itemName });
  const zomatoItems = await Zomato.find({ name: itemName });

  
  const allItems = [...swiggyItems, ...zomatoItems];

  
  if (allItems.length === 0) {
    res.status(404);
    throw new Error('Item not found');
  }

  
  const lowestPricedItem = allItems.reduce((min, item) => item.price < min.price ? item : min);

  
  res.json({
    name: lowestPricedItem.name,
    price: lowestPricedItem.price,
    //source: lowestPricedItem.source, 
  });
});




module.exports = { registerUser, authUser,searchItem };
