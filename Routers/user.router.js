var express = require("express");
const { User } = require("../Models/user.model");
var userRouter = express.Router();

userRouter.post("/createUser", (req, res) => {
  User.create(req.body)
    .then((response) => {
      res
        .status(201)
        .json({ Message: "User is created Successfully", response: response });
    })
    .catch((error) => {
      res.status(500).json({ Message: "Something went wrong!!", error: error });
    });
});

userRouter.get("/getUsers", (req, res) => {
  User.find()
    .populate("blog")
    .then((response) => {
      res
        .status(200)
        .json({ Message: "User is fetched Successfully", response: response });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ Message: "Something went wrong!!", error: error });
    });
});

module.exports = { userRouter };
// Post
