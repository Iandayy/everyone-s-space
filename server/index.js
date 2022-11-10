const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const cors = require("cors");

const Post = require("./models/post");

mongoose
  .connect("mongodb://localhost:27017/post")
  .then(() => console.log("Open"))
  .catch((err) => console.log("Error", err));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

// all
app.get("/posts", async (req, res) => {
  const posts = await Post.find({});
  res.json(posts);
});

// new
app.post("/posts", async (req, res) => {
  const newPost = new Post(req.body);
  await newPost.save();
  res.redirect("/all");
});

// show
app.get("/posts/:id", async (req, res) => {
  const { id } = req.params;
  const ReadPost = await Post.findById(id);
  res.json(ReadPost);
});

// edit
app.patch("/posts/:id", async (req, res) => {
  const { id } = req.params;
  await Post.findByIdAndUpdate(id, req.body, {
    runValidators: true,
  });
  res.redirect("/read");
});

// delete
app.delete("/posts/:id", async (req, res) => {
  const { id } = req.params;
  await Post.findByIdAndDelete(id);
  res.redirect("/all");
});

// category
app.get("/search", async (req, res) => {
  const { category } = req.query;
  const categoryPosts = await Post.find({ category });
  res.json(categoryPosts);
});

app.listen(port, (req, res) => {
  console.log("App is listening on port 8080");
});
