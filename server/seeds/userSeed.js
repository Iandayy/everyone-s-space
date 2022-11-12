const mongoose = require("mongoose");
const User = require("../models/user");

mongoose
  .connect("mongodb://localhost:27017/post", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Open"))
  .catch((err) => console.log("Error", err));

const seedUsers = [
  {
    name: "ian",
    password: "ian1",
  },
  {
    name: "mark",
    password: "mark1",
  },
  {
    name: "jack",
    password: "jack1",
  },
  {
    name: "rose",
    password: "rose1",
  },
];

// User.insertMany(seedUsers)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// User.deleteMany()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
