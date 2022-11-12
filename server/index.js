const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { v4: uuidv4 } = require("uuid");
const { v5: uuidv5 } = require("uuid");

const Post = require("./models/post");
const User = require("./models/user");

mongoose
  .connect("mongodb://localhost:27017/post")
  .then(() => console.log("Open"))
  .catch((err) => console.log("Error", err));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(cookieParser("secret"));

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
  const { member_id } = req.cookies;
  if (member_id === undefined) {
    const items = { ...req.body, name: `anonym_${uuidv4().slice(0, 8)}` };
    const newPost = new Post(items);
    await newPost.save();
    res.redirect("/posts/all");
  } else {
    const user = await User.findById({ _id: member_id });
    const items = { ...req.body, name: user.name, member_id };
    const newPost = new Post(items);
    await newPost.save();
    res.redirect("/posts/all");
  }
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
  res.redirect("/posts/read");
});

// delete
app.delete("/posts/:id", async (req, res) => {
  const { id } = req.params;
  const ReadPost = await Post.findById(id);
  await Post.findByIdAndDelete(id);
  res.redirect(`/posts/${ReadPost.category}`);
});

// category
app.get("/search", async (req, res) => {
  const { category } = req.query;
  const categoryPosts = await Post.find({ category });
  res.json(categoryPosts);
});

// join
app.post("/join", async (req, res) => {
  if (req.body.password !== req.body.check) {
    res.write("<script>alert('Please check your password again.')</script>");
    res.write('<script>window.location="/join"</script>');
    return;
  }
  const items = {
    name: req.body.name,
    password: uuidv5(req.body.password, "b2e670b9-dcb9-400a-964e-a3899653725d"),
  };
  const newJoin = new User(items);
  await newJoin.save();
  res.redirect("/login");
});

// login
app.post("/login", async (req, res) => {
  const user = await User.findOne({ name: req.body.name });
  if (user === null) {
    res.write("<script>alert('Please check your name again.')</script>");
    res.write('<script>window.location="/login"</script>');
    return;
  }
  const password = uuidv5(
    req.body.password,
    "b2e670b9-dcb9-400a-964e-a3899653725d"
  );
  if (user.password !== password) {
    res.write("<script>alert('Please check your password again.')</script>");
    res.write('<script>window.location="/login"</script>');
    return;
  }
  if (user.name === req.body.name && user.password === password) {
    res.cookie("member_id", `${user._id}`, { maxAge: 10 * 60 * 1000 });
    res.cookie("login", "true", { maxAge: 10 * 60 * 1000 });
    res.redirect("/posts/all");
  }
});

// logout
app.post("/logout", async (req, res) => {
  res.clearCookie("member_id");
  res.clearCookie("login");
  res.redirect("/");
});

app.listen(port, (req, res) => {
  console.log("App is listening on port 8080");
});
