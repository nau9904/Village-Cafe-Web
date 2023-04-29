const siteRoute = require('./site');

function route(app) {
    //Site route
    app.use('/', siteRoute);
};

module.exports = route;