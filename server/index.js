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

app.set("client", path.join(__dirname, "client/build/index.html"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000", "https://everyone-s-post.vercel.app/"],
  })
);
app.use(cookieParser("secret"));

app.get("/", async (req, res) => {
  console.log("hi");
  res.send("greet");
});

// all
app.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find({});
    res.json(posts);
  } catch (err) {
    console.log("err", err);
  }
});

// new
app.post("/posts", async (req, res) => {
  try {
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
  } catch (err) {
    console.log("err", err);
  }
});

// show
app.get("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const ReadPost = await Post.findById(id);
    res.json(ReadPost);
  } catch (err) {
    console.log("err", err);
  }
});

// edit
app.patch("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Post.findByIdAndUpdate(id, req.body, {
      runValidators: true,
    });
    res.redirect("/posts/read");
  } catch (err) {
    console.log("err", err);
  }
});

// delete
app.delete("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const ReadPost = await Post.findById(id);
    await Post.findByIdAndDelete(id);
    res.redirect(`/posts/${ReadPost.category}`);
  } catch (err) {
    console.log("err", err);
  }
});

// category
app.get("/search", async (req, res) => {
  try {
    const { category } = req.query;
    const categoryPosts = await Post.find({ category });
    res.json(categoryPosts);
  } catch (err) {
    console.log("err", err);
  }
});

// join
app.post("/join", async (req, res) => {
  try {
    if (req.body.password !== req.body.check) {
      res.write("<script>alert('Please check your password again.')</script>");
      res.write('<script>window.location="/join"</script>');
      return;
    }
    const items = {
      name: req.body.name,
      password: uuidv5(
        req.body.password,
        "b2e670b9-dcb9-400a-964e-a3899653725d"
      ),
    };
    const newJoin = new User(items);
    await newJoin.save();
    res.redirect("/login");
  } catch (err) {
    console.log("err", err);
  }
});

// login
app.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ name: req.body.name });
    if (user === null) {
      res.write("<script>alert('Please check your name again.')</script>");
      res.write('<script>window.location="/login"</script>');
    }
    const password = uuidv5(
      req.body.password,
      "b2e670b9-dcb9-400a-964e-a3899653725d"
    );
    if (user.password !== password) {
      res.write("<script>alert('Please check your password again.')</script>");
      res.write('<script>window.location="/login"</script>');
    }
    if (user.name === req.body.name && user.password === password) {
      res.cookie("member_id", `${user._id}`, { maxAge: 2 * 60 * 1000 });
      res.cookie("login", "true", { maxAge: 2 * 60 * 1000 });
      res.cookie("extend", "true", { maxAge: 1 * 60 * 1000 });
      res.redirect("/posts/all");
    }
  } catch (err) {
    console.log("err", err);
  }
});

// logout
app.post("/logout", async (req, res) => {
  res.clearCookie("member_id");
  res.clearCookie("login");
  res.clearCookie("extend");
  res.redirect("/");
});

// extend
app.post("/extend", async (req, res) => {
  try {
    const { member_id } = req.cookies;
    const user = await User.findById(member_id);
    res.cookie("member_id", `${user._id}`, { maxAge: 2 * 60 * 1000 });
    res.cookie("login", "true", { maxAge: 2 * 60 * 1000 });
    res.cookie("extend", "true", { maxAge: 1 * 60 * 1000 });
    res.write("<script>alert('Extended login time.')</script>");
    res.write('<script>window.location="/"</script>');
  } catch (err) {
    console.log("err", err);
    res.redirect("/");
  }
});

app.listen(process.env.PORT || port, (req, res) => {
  console.log("App is listening on port 8080");
});
