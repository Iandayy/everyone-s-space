const express = require("express");
const router = express.Router();

const Post = require("../models/post");
const User = require("../models/user");

router.get("/userInfo/:id", async (req, res) => {
  try {
    console.log(req.body);
    // const userInfo = await User.findById(id);
    // console.log(userInfo);
    res.send("ok");
  } catch (err) {
    console.log("err", err);
  }
});

router.delete("/deleteAccount/:id", async (req, res) => {
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
