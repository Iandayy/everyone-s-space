const mongoose = require("mongoose");
const Post = require("../models/post");

mongoose
  .connect("mongodb://localhost:27017/post", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Open"))
  .catch((err) => console.log("Error", err));

const seedPosts = [
  {
    name: "ian",
    title: "library",
    content: "I am going to library.",
    date: "1981-10-26",
    mood: 1,
    category: "alien",
  },
  {
    name: "mark",
    title: "Volleyball",
    content: "Volleyball is fun.",
    date: "2022-11-12",
    mood: 4,
    category: "alien",
  },
  {
    name: "jack",
    title: "love",
    content: "I love you.",
    date: "1981-10-26",
    mood: 5,
    category: "alien",
  },
  {
    name: "rose",
    title: "me",
    content: "Me too.",
    date: "1981-10-26",
    mood: 5,
    category: "alien",
  },
];

// Post.insertMany(seedPosts)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// Post.deleteMany()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
