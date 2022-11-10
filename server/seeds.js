const mongoose = require("mongoose");
const Post = require("./models/post");

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
    category: "study",
  },
  {
    name: "mark",
    title: "Volleyball",
    content: "Volleyball is fun.",
    date: "2022-11-12",
    mood: 4,
    category: "hobby",
  },
  {
    name: "jack",
    title: "love",
    content: "I love you.",
    date: "1981-10-26",
    mood: 5,
    category: "daily",
  },
  {
    name: "rose",
    title: "me",
    content: "Me too.",
    date: "1981-10-26",
    mood: 5,
    category: "daily",
  },
];

Post.insertMany(seedPosts)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Post.deleteMany()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
