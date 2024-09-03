const express = require("express");
const cors = require("cors");

const app = express();

const port = 4000;

app.use(cors());
app.use(express.json());

app.post("/v1/auth/signin", (req, res) => {
  if (req.body.email === "admin@gmail.com" && req.body.password === "admin") {
    res.status(200).send({
      name: "bhzd",
      email: "admin@gmail.com",
      accessToken: "mytoken12345",
    });
  } else {
    res.status(401).send({
      message: "email or password is invalid",
    });
  }
});

app.get("/v1/me", (req, res) => {
  console.log("me: ");

  if (req.headers.authorization === "mytoken12345") {
    res.status(200).send({
      name: "bhzd",
      email: "admin@gmail.com",
    });
  } else {
    res.status(401).send({
      message: "user is not authorized",
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
