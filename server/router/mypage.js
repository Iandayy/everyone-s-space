const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const Post = require("../models/post");
const User = require("../models/user");

router
  .route("/:id")
  /** userInfo */
  .get(async (req, res) => {
    try {
      console.log(req.body);
      const userInfo = await User.findById(id);
      console.log(userInfo);
      res.send("ok");
    } catch (err) {
      console.log("err", err);
    }
  })

  // 1. a -> a ok
  // 2. a -> b
  //b ? no
  //b : ok
  /** profile edit */
  .patch(async (req, res) => {
    try {
      const { id } = req.params;
      const { name, password } = req.body;

      const userInfo = await User.findById(id); // a
      const findUser = await User.findOne({ name }); //a b

      // console.log("userInfo", userInfo);
      // console.log("findUser", findUser);

      if (!findUser) {
        const hash = await bcrypt.hash(password, 12);
        const items = {
          name,
          password: hash,
        };

        await User.findByIdAndUpdate(id, items, {
          runValidators: true,
        });

        const respo = await Post.findByIdAndUpdate(
          id,
          { name: [userInfo.name] },
          { name: name }
        );

        console.log(respo);
        res.send({ message: "Your information has been changed." });
        return;
      }

      if (findUser.name !== userInfo.name) {
        if (findUser) {
          res.status(400).send({
            message: "A name that exists. Please write another name.",
          });
          return;
        }
      }
    } catch (err) {
      console.log("err", err);
    }
  })
  /** deleteAccount */
  .delete(async (req, res) => {
    try {
      const { id } = req.params;
      await Post.deleteMany({ member_id: id });
      await User.findByIdAndDelete(id);

      res.clearCookie("member_id");
      res.clearCookie("login");

      res.write(
        "<script>alert('Your account has been cancelled. Thank you for using it :)')</script>"
      );
      res.write('<script>window.location="/"</script>');
      return;
    } catch (err) {
      console.log("err", err);
      res.redirect("/");
    }
  });

module.exports = router;
