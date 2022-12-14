const mongoose = require("mongoose");
const designSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "A design must have a name"],
      unique: true,
    },
    price: Number,
    description: String,
    image: String,
  });
  const Design = mongoose.model("Design", designSchema);

  module.exports = Design;