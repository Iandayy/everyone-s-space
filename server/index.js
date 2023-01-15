require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");

const post = require("./router/post");
const auth = require("./router/auth");
const mypage = require("./router/mypage");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Open"))
  .catch((err) => console.log("Error", err));


app.use(function (req, res, next) {
res.setHeader('Access-Control-Allow-Origin', 'https://everyone-s-post.vercel.app/');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
res.setHeader('Access-Control-Allow-Credentials', true);
next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser("secret"));
app.use(methodOverride("_method"));

app.use("/posts", post);
app.use("/auth", auth);
app.use("/mypage", mypage);

app.get("/", (req, res) => {
  res.send("ok");
});

app.listen(port, (req, res) => {
  console.log("App is listening on port 8080");
});
