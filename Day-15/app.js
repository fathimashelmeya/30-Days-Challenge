const express = require("express");
const app = express();

const port = 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/login", (req, res) => {
  let { username, password } = req.body;

  if (username == "fathima" && password == "1234") {
    res.render("result", {
      message: "Login Sucessfull",
    });
  } else {
    res.render("result", {
      message: "Invalid Username  or Password",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
