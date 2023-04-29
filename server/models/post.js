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
  category: {
    type: String,
    enum: ["universe", "alien", "mystery"],
  },
  member_id: {
    type: String,
  },
  key: {
    type: String,
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
