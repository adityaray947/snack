const mongoose = require("mongoose");

const zomatoModel = mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    ratings: { type: Number, min: 0, max: 5, required: true },
    image: { type: String, required: true },
    company_name:{type:String,required:true}
  },
  { timestamps: true }
);

const Zomato = mongoose.model("Zomato", zomatoModel);

module.exports = Zomato;
