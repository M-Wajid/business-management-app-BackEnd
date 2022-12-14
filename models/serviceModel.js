const mongoose = require("mongoose");
const serviceSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "A service must have a name"],
      unique: true,
    },
    price: Number,
    description: String,
    image: String,
  });
  const service = mongoose.model("service", serviceSchema);

  module.exports = service;