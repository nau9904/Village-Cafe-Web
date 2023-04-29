const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
  role: {
    type: String,
    default: "user",
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

// Hash password
// userSchema.pre('save', async function (next) {
//   if(!this.isModified("password")) {
//     next();
//   }
//   this.password = bcrypt.hash(this.password, 10);
// });

// //jwt token
userSchema.methods.getJwtToken = function () {
  return jwt.sign({id: this._id}, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

// // comapre password
// userSchema.methods.comparePassword = async function(enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

module.exports = mongoose.model("user", userSchema);


