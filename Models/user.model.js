var mongoose = require("mongoose");
var bcrypt = require("bcrypt");
let userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Kindly provide the first name"],
    minLength: 3,
    maxLength: 50,
  },
  lastName: {
    type: String,
    required: [true, "Kindly provide the last name"],
    minLength: 3,
    maxLength: 50,
  },
  password: {
    type: String,
    required: [true, "Kindly provide the password"],
  },
  email: {
    type: String,
    required: [true, "Kindly Provide the email"],
    unique: true,
  },
  username: {
    type: String,
    unique: true,
    required: [true, "Kindly provide the password"],
  },
  article: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Article",
    },
  ],
});
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    // salt Rounding
    this.password = await bcrypt.hash(this.password, 10);
    next();
  }
  next();
});

let User = mongoose.model("user", userSchema);
module.exports = { User };
