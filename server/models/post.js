const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  name: {
    type: String,
    lowerCase: true,
  },
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  date: {
    type: String,
  },
  mood: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
  },
  category: {
    type: String,
    enum: ["study", "hobby", "daily"],
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
