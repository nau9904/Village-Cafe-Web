const User = require('../models/users')
module.exports = (req, res, next) => {
    User.findById("6438d3d09c74cfb98495552b")
        .then(console.log('you are not admin'))
        .catch(console.log("error"))
    }
