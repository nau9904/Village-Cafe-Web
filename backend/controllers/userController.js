const userModel = require("../models/users");
const user = require("../models/users");
const express = require("express");
const bcrypt = require("bcrypt");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const jwt = require("jsonwebtoken");
const {isAuthenticated} = require("../middleware/auth");
const sendToken = require("../utils/jwtToken")

// User API
class userController {
  //[POST] /Login
  async Login(req, res) {
    const { email, password } = req.body;

    await userModel
      .findOne({ email: email })
      .then((user) => {
        if (!user) {
          return res.send({
            message: "Email is not available, Please check again!",
            alert: false,
          });
        }
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) {
            console.error(err);
            return res.status(500).send({
              message: "Server error",
              alert: false,
            });
          }

          if (result) {
            const dataSend = {
              _id: user._id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              image: user.image,
            };

            return res.send({
              message: "Login is successful",
              alert: true,
              data: dataSend,
            });
          } else {
            return res.status(400).send(new Error('Something wrong with Email or Password!'))
          }
        });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send({
          message: "Server error",
          alert: false,
        });
      });
  }
  

  //[POST] /signup
  async Signup(req, res) {
    const { firstName, lastName, email, password, image } = req.body;

    await userModel
      .findOne({ email })
      .then((checkUser) => {
        if (checkUser) {
          res
            .status(201)
            .json({ message: "Email id is already registered", alert: false });
        } else {
          const user = new userModel({
            firstName,
            lastName,
            email,
            password,
            image,
          });
          userModel
            .create(user)
            .then(() => {
              res
                .status(201)
                .json({ message: "Successfully signed up", alert: true });
            })
            .catch((err) => {
              console.error(err);
              res.status(500).json({ message: "Server error", alert: false });
            });
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ message: "Server error", alert: false });
      });
  }
}

module.exports = new userController();
