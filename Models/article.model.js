var mongoose = require("mongoose");
var bcrypt = require("bcrypt");
let articleSchema = new mongoose.Schema({
  article_title: {
    type: String,
    required: true,
  },
  article_desciption: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  comment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

let Article = mongoose.model("Article", articleSchema);
module.exports = { Article };
