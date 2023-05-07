const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter your FirstName!"],
  },
  lastName: {
    type: String,
    required: [true, "Please enter your LastName!"],
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter your password!"],
  },
  confirmPassword: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
  resetPasswordToken: String,
  resetPasswordTime: Date,
});

userSchema.pre("save", function (next) {
  const user = this;
  bcrypt.hash(user.password, 10, (error, hash) => {
    user.password = hash;
    next();
  });
});

module.exports = mongoose.model("user", userSchema);


