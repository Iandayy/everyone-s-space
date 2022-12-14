const express = require("express");
const router = express.Router();

const { v5: uuidv5 } = require("uuid");

const User = require("../models/user");

// join
router.post("/join", async (req, res) => {
  try {
    const findUser = await User.findOne({ name: req.body.name });

    if (findUser !== null) {
      res
        .status(400)
        .send({ message: "A name that exists. Please write another name." });
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
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ name: req.body.name });
    if (user === null) {
      res.status(401).send({ message: "Please check your name again." });
    }
    const password = uuidv5(
      req.body.password,
      "b2e670b9-dcb9-400a-964e-a3899653725d"
    );
    if (user.password !== password) {
      res.status(401).send({ message: "Please check your password again." });
    }
    if (user.name === req.body.name && user.password === password) {
      res.cookie("member_id", `${user._id}`, { maxAge: 2 * 60 * 1000 });
      res.cookie("login", "true", { maxAge: 2 * 60 * 1000 });
      res.redirect("/posts/all");
    }
  } catch (err) {
    console.log("err", err);
  }
});

// logout
router.post("/logout", async (req, res) => {
  res.clearCookie("member_id");
  res.clearCookie("login");
  res.redirect("/");
});

// extend
// router.post("/extend", async (req, res) => {
//   try {
//     const { member_id } = req.cookies;
//     const user = await User.findById(member_id);
//     res.cookie("member_id", `${user._id}`, { maxAge: 2 * 60 * 1000 });
//     res.cookie("login", "true", { maxAge: 2 * 60 * 1000 });
//     res.cookie("extend", "true", { maxAge: 1 * 60 * 1000 });
//     res.write("<script>alert('Extended login time.')</script>");
//     res.write('<script>window.location="/"</script>');
//   } catch (err) {
//     console.log("err", err);
//     res.redirect("/");
//   }
// });

module.exports = router;
