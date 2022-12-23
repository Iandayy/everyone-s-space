const express = require("express");
const router = express.Router();

const { v4: uuidv4 } = require("uuid");

const Post = require("../models/post");
const User = require("../models/user");

router
  .route("/")
  // all
  .get(async (req, res) => {
    try {
      const posts = await Post.find({});
      res.json(posts);
    } catch (err) {
      console.log("err", err);
    }
  })
  // new
  .post(async (req, res) => {
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

// category;
router.get("/search", async (req, res) => {
  try {
    const { category } = req.query;
    const categoryPosts = await Post.find({ category: category });
    res.json(categoryPosts);
  } catch (err) {
    console.log("err", err);
  }
});

router
  .route("/:id")
  // show
  .get(async (req, res) => {
    try {
      const { id } = req.params;
      const ReadPost = await Post.findById(id);
      res.json(ReadPost);
    } catch (err) {
      console.log("err", err);
    }
  })
  // edit
  .patch(async (req, res) => {
    try {
      const { id } = req.params;
      await Post.findByIdAndUpdate(id, req.body, {
        runValidators: true,
      });
      res.redirect("/posts/read");
    } catch (err) {
      console.log("err", err);
    }
  })
  // delete
  .delete(async (req, res) => {
    try {
      const { id } = req.params;
      await Post.findByIdAndDelete(id);
      res.redirect("/posts/all");
    } catch (err) {
      console.log("err", err);
    }
  });

module.exports = router;
