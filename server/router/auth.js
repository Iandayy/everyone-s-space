const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const User = require("../models/user");

// join
router.post("/join", async (req, res) => {
  try {
    const { name, password } = req.body;
    const findUser = await User.findOne({ name });

    if (findUser !== null) {
      res
        .status(400)
        .send({ message: "A name that exists. Please write another name." });
      return;
    }
    const hash = await bcrypt.hash(password, 12);
    const items = {
      name,
      password: hash,
    };
    const newJoin = new User(items);
    await newJoin.save();
    res.send({ message: "Sign up !" });
  } catch (err) {
    console.log("err", err);
  }
});

// login
router.post("/login", async (req, res) => {
  try {
    const { name, password } = req.body;

    const user = await User.findOne({ name });

    if (user === null) {
      res.status(401).send({ message: "Please check your name again." });
      return;
    }

    const validPassword = await bcrypt.compare(password, user.password);

const options = {
      sameSite: "None",
      secure: true,
      maxAge: 10 * 60 * 1000,
      path: "/",
      domain: ".cloudtype.app",
      signed: true,
    };

    if (validPassword) {
      res.cookie("member_id", `${user._id}`, options);
      res.cookie("login", "true", options);
      res.send({ message: "Welcome to Everyone's Post !" });
    } else {
      res.status(401).send({ message: "Please check your password again." });
      return;
    }
  } catch (err) {
    console.log("err", err);
  }
});

// logout
router.post("/logout", async (req, res) => {
  const options = {
    path: "/",
    domain: ".cloudtype.app",
  };
  res.clearCookie("member_id", options);
  res.clearCookie("login", options);
  res.send({ message: "Thank you !" });
});

module.exports = router;
