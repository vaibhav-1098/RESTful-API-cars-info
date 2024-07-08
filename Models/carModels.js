const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create database
mongoose.connect(process.env.DB_URL).then(() => {
  console.log("connected to database");
});

// create document format
const ProductSchema = new Schema({
  model_name: String,
  colour: String,
  showroom_cost: Number,
  company: {
    type: String,
    enum: ["Maruti", "Honda", "Tata"],
  },
});

// create collection
const Product = mongoose.model("product", ProductSchema);
module.exports = Product;
