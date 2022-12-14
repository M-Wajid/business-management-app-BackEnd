const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "A product must have a name"],
      unique: true,
    },
    price: Number,
    description: String,
    image: String,
  });
  const product = mongoose.model("product", productSchema);

  module.exports = product;