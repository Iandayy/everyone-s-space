require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const post = require("./router/post");
const auth = require("./router/auth");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Open"))
  .catch((err) => console.log("Error", err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser("secret"));

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://web-client-dpuqy925lbnnny33.gksl2.cloudtype.app",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
  })
);

app.use("/posts", post);
app.use("/auth", auth);

app.get("/", (req, res) => {
  res.send("ok");
});

app.listen(port, (req, res) => {
  console.log("App is listening on port 8080");
});
