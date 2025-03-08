var express = require("express");
const { Article } = require("../Models/article.model");
const { User } = require("../Models/user.model");
var articleRouter = express.Router();

articleRouter.post("/createArticle", async (req, res) => {
  let { user } = req.body;

  let userDetail = await User.findOne({ _id: user });

  Article.create(req.body)
    .then(async (response) => {
      userDetail.blog.push(response._id);
      await userDetail.save();
      res.status(201).json({
        Message: "Article is created Successfully",
        response: response,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ Message: "Something went wrong!!", error: error });
    });
});

module.exports = { articleRouter };
