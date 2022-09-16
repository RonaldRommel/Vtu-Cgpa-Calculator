const express = require("express");
const morgan = require("morgan");
const app = express();

// const Blog = require("./models/blog");
// const blogRoutes = require("./routes/blogRoutes");
// const blogController = require("./controllers/blogController");
// require("dotenv").config();

app.set("view engine", "ejs");
app.listen(3000);

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.render("homepage", { title: "home" });
});

app.get("/semester", (req, res) => {
  res.render("semester", { title: "semester" });
});
