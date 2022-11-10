const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  num: {
    type: Number,
    enum: [1, 2, 3],
  },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
