const userModel = require("../models/users");
const asyncHandler = require('express-async-handler');

class siteController {

  //[GET] /
  home(req, res, next) {
    
    res.send("Server is running");
  }
}

module.exports = new siteController();
