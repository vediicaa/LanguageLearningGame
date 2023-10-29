const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  options: { type: [String], required: true },
  correctAnswer: { type: String, required: true },
  rating: { type: Number, required: true,},
  decreaseAmount: {type: Number, required: true,},
  IncreaseAmount: {type: Number, required: true, },
  // You can add other fields as needed for your questions
});

module.exports = mongoose.model("Question", questionSchema);
