const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "A project must have a name"],
      unique: true,
    },
    price: Number,
    description: String,
    image: String,
  });
  const project = mongoose.model("project", projectSchema);

  module.exports = project;