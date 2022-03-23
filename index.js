var express = require("express");
var app = express();
var cors = require("cors");

app.set("port", 8000);
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());

app.listen(app.get("port"), function () {
  console.log("app is running on port", app.get("port"));
})

app.get("/get_users", (req, res) => {
  res.send("this is the get users API. Hello world!");
})

app.get("/login", (req, res) => {
  if (req.query.email === "akash@gmail.com" && req.query.password === "Pass123") {
    res.json({ status: true, message: "Login successful" });
  } else {
    res.json({ status: false, message: "Login failed" });
  }
})

app.post("/login_post", (req, res) => {
  console.log(req.body);
})