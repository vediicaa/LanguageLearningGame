const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  src: { type: String, required: true } 
});

const imageSchema = new mongoose.Schema({
  src: { type: String, required: true }, 
  caption: { type: String, required: true }
});

const moduleOneSchema = new mongoose.Schema({
  sentence: { type: String, required: true },
  items: { type: [itemSchema], required: true },
  images: { type: [imageSchema], required: true },
  timer: { type: Number, required: true }
});

module.exports = mongoose.model("ModuleOne", moduleOneSchema);
