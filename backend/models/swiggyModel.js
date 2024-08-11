const mongoose = require("mongoose");

const swiggyModel = mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    place: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    ratings: { type: Number, min: 0, max: 5, required: true },
  },
  { timestamps: true }
);

const Swiggy = mongoose.model("Swiggy", swiggyModel);

module.exports = Swiggy;
