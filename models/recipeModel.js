const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: { type: String, default: "/images/default.png" },
    ingredients: {
      type: [String],
      required: true,
    },
    instructions: {
      type: String,
      required: true,
    },
    cookTime: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Recipe", recipeSchema);
